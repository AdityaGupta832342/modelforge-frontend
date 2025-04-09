'use client';
import { useState, useRef, useEffect } from 'react';
import { DndContext, DragEndEvent, DragStartEvent, DragOverlay, UniqueIdentifier, DragOverEvent } from '@dnd-kit/core';
import Canvas, { LayerData } from './Canvas';

interface ZoomableCanvasProps {
  layers: LayerData[];
  onLayerSelect: (layer: LayerData) => void;
  selectedLayerId: string | null;
  insertionIndex: number | null;
  onDragStart: (event: DragStartEvent) => void;
  onDragOver: (event: DragOverEvent) => void;
  onDragEnd: (event: DragEndEvent) => void;
  activeDraggable: null | {
    id: UniqueIdentifier;
    data: { type: string; neuronCount: number; isLayer: boolean };
  };
}

export default function ZoomableCanvas({
  layers,
  onLayerSelect,
  selectedLayerId,
  insertionIndex,
  onDragStart,
  onDragOver,
  onDragEnd,
  activeDraggable
}: ZoomableCanvasProps) {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const canvasRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle mouse wheel for zooming
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    
    // Determine zoom direction
    const delta = e.deltaY < 0 ? 1.1 : 0.9;
    
    // Calculate new scale
    const newScale = Math.min(Math.max(scale * delta, 0.5), 3);
    
    // Calculate mouse position relative to the container
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Calculate the point in the canvas before zooming
    const canvasX = (mouseX - position.x) / scale;
    const canvasY = (mouseY - position.y) / scale;
    
    // Calculate new position to keep the mouse point fixed
    const newX = mouseX - canvasX * newScale;
    const newY = mouseY - canvasY * newScale;
    
    setScale(newScale);
    setPosition({ x: newX, y: newY });
  };

  // Handle mouse down for panning
  const handleMouseDown = (e: React.MouseEvent) => {
    // Only handle middle mouse button (button 1) or right mouse button (button 2)
    if (e.button !== 1 && e.button !== 2) return;
    
    e.preventDefault();
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  // Handle mouse move for panning
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    
    e.preventDefault();
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    });
  };

  // Handle mouse up to stop panning
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Handle double click to reset zoom and position
  const handleDoubleClick = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  // Add event listeners for mouse up outside the component
  useEffect(() => {
    const handleGlobalMouseUp = () => {
      setIsDragging(false);
    };

    window.addEventListener('mouseup', handleGlobalMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, []);

  // Render preview for the drag overlay
  const renderDragOverlay = () => {
    if (!activeDraggable) return null;
    const { type } = activeDraggable.data;
    return (
      <div className="p-4 bg-[#2A214B] rounded-lg shadow-md">
        <h3 className="text-white font-semibold">{type}</h3>
      </div>
    );
  };

  return (
    <DndContext 
      onDragStart={onDragStart} 
      onDragOver={onDragOver}
      onDragEnd={onDragEnd}
    >
      <DragOverlay>{renderDragOverlay()}</DragOverlay>
      <div 
        ref={containerRef}
        className="flex-1 overflow-hidden relative"
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onDoubleClick={handleDoubleClick}
        onContextMenu={(e) => e.preventDefault()} // Prevent context menu on right click
      >
        <div 
          className="absolute inset-0"
          style={{
            transform: `scale(${scale}) translate(${position.x / scale}px, ${position.y / scale}px)`,
            transformOrigin: '0 0',
            transition: isDragging ? 'none' : 'transform 0.1s ease-out',
            cursor: isDragging ? 'grabbing' : 'grab'
          }}
        >
          <Canvas
            layers={layers}
            canvasRef={canvasRef}
            onLayerSelect={onLayerSelect}
            selectedLayerId={selectedLayerId}
            insertionIndex={insertionIndex}
          />
        </div>
        
        {/* Zoom controls */}
        <div className="absolute bottom-4 right-4 flex flex-col gap-2">
          <button 
            className="w-10 h-10 bg-[#2A214B] rounded-full flex items-center justify-center text-white shadow-lg hover:bg-[#3A2A5B] transition-colors"
            onClick={() => setScale(Math.min(scale + 0.1, 3))}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </button>
          <button 
            className="w-10 h-10 bg-[#2A214B] rounded-full flex items-center justify-center text-white shadow-lg hover:bg-[#3A2A5B] transition-colors"
            onClick={() => setScale(Math.max(scale - 0.1, 0.5))}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
            </svg>
          </button>
          <button 
            className="w-10 h-10 bg-[#2A214B] rounded-full flex items-center justify-center text-white shadow-lg hover:bg-[#3A2A5B] transition-colors"
            onClick={handleDoubleClick}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </button>
        </div>
        
        {/* Zoom level indicator */}
        <div className="absolute bottom-4 left-4 bg-[#2A214B] px-3 py-1 rounded-full text-white text-sm">
          {Math.round(scale * 100)}%
        </div>
      </div>
    </DndContext>
  );
} 