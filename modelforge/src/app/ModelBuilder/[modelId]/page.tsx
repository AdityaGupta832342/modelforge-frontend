'use client';
import { useParams } from 'next/navigation';
import { useState, useRef } from 'react';
import { DndContext, DragEndEvent, DragStartEvent, DragOverlay, UniqueIdentifier, DragOverEvent } from '@dnd-kit/core';
import Canvas, { LayerData } from '@/components/Canvas';

export default function ModelBuilderPage() {
  const params = useParams();
  const modelId = params?.modelId;
  const [selectedLayer, setSelectedLayer] = useState<LayerData | null>(null);
  const [layers, setLayers] = useState<LayerData[]>([]);
  const canvasRef = useRef<HTMLDivElement>(null);
  const [insertionIndex, setInsertionIndex] = useState<number | null>(null);
  
  // New state for active draggable item
  const [activeDraggable, setActiveDraggable] = useState<null | {
      id: UniqueIdentifier;
      data: { type: string; neuronCount: number; isLayer: boolean };
    }>(null);

  const handleDragStart = (event: DragStartEvent) => {
    const { id, data } = event.active;
    const currentData = data.current as { type: string; neuronCount: number; isLayer: boolean } | undefined;
    if (currentData?.isLayer) {
      setActiveDraggable({ id, data: currentData });
    }
  };

  const handleDragOver = (event: DragOverEvent) => {
    if (!canvasRef.current || !event.over || event.over.id !== 'canvas') return;
    
    const mouseEvent = event.activatorEvent as MouseEvent;
    const canvasRect = canvasRef.current.getBoundingClientRect();
    const canvasContainer = canvasRef.current.parentElement;
    
    if (!canvasContainer) return;
    
    // Calculate position relative to the scrollable container
    const scrollLeft = canvasContainer.scrollLeft;
    const relativePosition = {
      x: mouseEvent.clientX - canvasRect.left + scrollLeft,
      y: mouseEvent.clientY - canvasRect.top,
    };
    
    // Find the insertion index based on x position
    const newIndex = layers.findIndex(
      layer => relativePosition.x < layer.position.x
    );
    
    setInsertionIndex(newIndex === -1 ? layers.length : newIndex);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    setActiveDraggable(null);
    setInsertionIndex(null);
    
    // Only handle drops on the canvas
    if (event.over?.id === 'canvas' && event.active.data.current) {
      const mouseEvent = event.activatorEvent as MouseEvent;
      if (!canvasRef.current) return;
      
      const canvasRect = canvasRef.current.getBoundingClientRect();
      const canvasContainer = canvasRef.current.parentElement;
      
      if (!canvasContainer) return;
      
      // Calculate position relative to the scrollable container
      const scrollLeft = canvasContainer.scrollLeft;
      const relativePosition = {
        x: mouseEvent.clientX - canvasRect.left + scrollLeft,
        y: mouseEvent.clientY - canvasRect.top,
      };

      const { type, neuronCount, isExistingLayer } = event.active.data.current as {
        type: string;
        neuronCount: number;
        isLayer: boolean;
        isExistingLayer?: boolean;
      };

      // If this is an existing layer being rearranged
      if (isExistingLayer) {
        // Find the layer being moved
        const layerId = event.active.id as string;
        const layerIndex = layers.findIndex(layer => layer.id === layerId);
        
        if (layerIndex !== -1) {
          // Calculate the new position
          const HORIZONTAL_SPACING = 200; // pixels between layers
          
          // Determine the new index based on x position
          const newIndex = layers.findIndex(
            layer => relativePosition.x < layer.position.x
          );
          
          // If dropping at the end
          if (newIndex === -1) {
            // Move to the end
            const newLayers = [...layers];
            const [movedLayer] = newLayers.splice(layerIndex, 1);
            movedLayer.position = {
              x: layers[layers.length - 1].position.x + HORIZONTAL_SPACING,
              y: canvasRect.height / 2,
            };
            newLayers.push(movedLayer);
            setLayers(newLayers);
          } else {
            // Move to the new position
            const newLayers = [...layers];
            const [movedLayer] = newLayers.splice(layerIndex, 1);
            
            // Calculate new x position based on the layer at the new index
            const targetX = newIndex === 0 
              ? 150 // First position
              : layers[newIndex - 1].position.x + HORIZONTAL_SPACING;
            
            movedLayer.position = {
              x: targetX,
              y: canvasRect.height / 2,
            };
            
            newLayers.splice(newIndex, 0, movedLayer);
            setLayers(newLayers);
          }
        }
        return;
      }

      // Check if this is the first layer
      if (layers.length === 0) {
        // First layer must be Input
        if (type !== 'input') {
          alert('The first layer must be an Input layer');
          return;
        }
        
        // Create Input layer at the leftmost position
        const newLayer: LayerData = {
          id: `${Date.now()}`,
          type: 'input',
          neuronCount: 3, // Default for Input layer
          position: {
            x: 150, // Fixed left position
            y: canvasRect.height / 2, // Center vertically
          },
        };
        
        setLayers([newLayer]);
        return;
      }
      
      // For subsequent layers, determine where to insert based on position
      const HORIZONTAL_SPACING = 200; // pixels between layers
      
      // Find the insertion index based on x position
      const newIndex = layers.findIndex(
        layer => relativePosition.x < layer.position.x
      );
      
      // Calculate the x position for the new layer
      let xPosition: number;
      
      if (newIndex === -1) {
        // Add to the end
        xPosition = layers[layers.length - 1].position.x + HORIZONTAL_SPACING;
      } else if (newIndex === 0) {
        // Add at the beginning (but after Input layer)
        xPosition = 150 + HORIZONTAL_SPACING;
      } else {
        // Insert between layers
        xPosition = layers[newIndex - 1].position.x + HORIZONTAL_SPACING;
      }
      
      const newLayer: LayerData = {
        id: `${Date.now()}`,
        type,
        neuronCount: type === 'output' ? 1 : neuronCount,
        position: {
          x: xPosition,
          y: canvasRect.height / 2, // Center vertically
        },
      };
      
      // Insert the layer at the appropriate position
      if (newIndex === -1) {
        setLayers((prev) => [...prev, newLayer]);
      } else {
        setLayers((prev) => {
          const newLayers = [...prev];
          newLayers.splice(newIndex, 0, newLayer);
          return newLayers;
        });
      }
    }
  };

  // Render preview for the drag overlay
  const renderDragOverlay = () => {
    if (!activeDraggable) return null;
    const { type } = activeDraggable.data;
    return (
      // Render a simple preview
      <div className="p-4 bg-[#2A214B] rounded-lg shadow-md">
        <h3 className="text-white font-semibold">{type}</h3>
      </div>
    );
  };

  const handleLayerSelect = (layer: LayerData) => {
    setSelectedLayer(layer);
  };

  const renderConfigFields = (layer: LayerData) => {
    switch (layer.type) {
      case 'input':
      case 'output':
        return (
          <>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300 mb-1">Dimensions</label>
              <input
                className="w-full p-2 bg-[#2A214B] rounded border border-gray-600 text-white"
                placeholder="e.g., 3, 64, 64"
                defaultValue={layer.neuronCount.toString()}
                onChange={(e) => {
                  const newLayers = layers.map(l => 
                    l.id === layer.id 
                      ? { ...l, neuronCount: parseInt(e.target.value) || 0 } 
                      : l
                  );
                  setLayers(newLayers);
                }}
              />
            </div>
          </>
        );
      case 'linear':
        return (
          <>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300 mb-1">In Features</label>
              <input 
                className="w-full p-2 bg-[#2A214B] rounded border border-gray-600 text-white" 
                placeholder="in_features" 
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300 mb-1">Out Features</label>
              <input 
                className="w-full p-2 bg-[#2A214B] rounded border border-gray-600 text-white" 
                placeholder="out_features" 
              />
            </div>
          </>
        );
      case 'conv2d':
      case 'conv3d':
        return (
          <>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300 mb-1">In Channels</label>
              <input 
                className="w-full p-2 bg-[#2A214B] rounded border border-gray-600 text-white" 
                placeholder="in_channels" 
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300 mb-1">Out Channels</label>
              <input 
                className="w-full p-2 bg-[#2A214B] rounded border border-gray-600 text-white" 
                placeholder="out_channels" 
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300 mb-1">Kernel Size</label>
              <input 
                className="w-full p-2 bg-[#2A214B] rounded border border-gray-600 text-white" 
                placeholder="kernel_size" 
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300 mb-1">Stride</label>
              <input 
                className="w-full p-2 bg-[#2A214B] rounded border border-gray-600 text-white" 
                placeholder="stride" 
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300 mb-1">Padding</label>
              <input 
                className="w-full p-2 bg-[#2A214B] rounded border border-gray-600 text-white" 
                placeholder="padding" 
              />
            </div>
          </>
        );
      case 'dropout':
      case 'dropout2d':
      case 'dropout3d':
        return (
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300 mb-1">Dropout Rate</label>
            <input 
              className="w-full p-2 bg-[#2A214B] rounded border border-gray-600 text-white" 
              placeholder="dropout_rate (0.0 - 1.0)" 
            />
          </div>
        );
      case 'relu':
      case 'leakyrelu':
      case 'sigmoid':
      case 'tanh':
      case 'softmax':
        return <p className="text-gray-400">No configurable parameters</p>;
      default:
        return <p className="text-gray-400">No configurable parameters</p>;
    }
  };
  
  return (
    <div className="h-screen flex flex-col bg-[#0C081D] text-white">
      {/* Top Navbar remains unchanged if any */}
      <DndContext 
        onDragStart={handleDragStart} 
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
      >
        <DragOverlay>{renderDragOverlay()}</DragOverlay>
        <div className="flex flex-1 overflow-hidden">
          {/* Canvas - Center */}
          <div className="flex-1 overflow-auto">
            <Canvas
              layers={layers}
              canvasRef={canvasRef}
              onLayerSelect={handleLayerSelect}
              selectedLayerId={selectedLayer?.id || null}
              insertionIndex={insertionIndex}
            />
          </div>

          {/* Right Pane - Hyperparameter Form */}
          <div className="w-80 bg-[#1A1533] border-l border-white/10 p-4 overflow-y-auto sticky top-0">
            <h2 className="text-lg font-semibold mb-4">Layer Config</h2>
            {!selectedLayer ? (
              <p className="text-gray-400">Select a layer to configure</p>
            ) : (
              <div>
                <h3 className="text-white font-medium mb-4">{selectedLayer.type} Layer</h3>
                {renderConfigFields(selectedLayer)}
              </div>
            )}
          </div>
        </div>
      </DndContext>
    </div>
  );
}
