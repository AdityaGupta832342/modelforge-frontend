'use client';
import { useState, useRef, useEffect } from 'react';
import { useDroppable } from '@dnd-kit/core';
import Layer from './Layer';
import LayerPalette from './LayerPalette';
import LayerConnection from './LayerConnection';

export interface LayerData {
  id: string;
  type: string;
  neuronCount: number;
  position: { x: number; y: number };
}

type CanvasProps = {
  layers: LayerData[];
  canvasRef: React.Ref<HTMLDivElement>;
  onLayerSelect: (layer: LayerData) => void;
  selectedLayerId: string | null;
  insertionIndex: number | null;
};

export default function Canvas({ 
  layers, 
  canvasRef, 
  onLayerSelect, 
  selectedLayerId,
  insertionIndex 
}: CanvasProps) {
  const { setNodeRef, isOver } = useDroppable({ 
    id: 'canvas',
    data: {
      accepts: ['layer']
    }
  });

  const canvasContainerRef = useRef<HTMLDivElement>(null);
  
  // Calculate the minimum width needed for all layers
  const minWidth = layers.length > 0 
    ? Math.max(800, layers[layers.length - 1].position.x + 300) 
    : 800;

  const mergeRefs = (node: HTMLDivElement) => {
    setNodeRef(node);
    if (typeof canvasRef === 'function') {
      canvasRef(node);
    } else if (canvasRef) {
      (canvasRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
    }
  };

  // Auto-scroll to the right when new layers are added
  useEffect(() => {
    if (canvasContainerRef.current && layers.length > 0) {
      const lastLayer = layers[layers.length - 1];
      if (lastLayer.position.x > canvasContainerRef.current.clientWidth - 300) {
        canvasContainerRef.current.scrollLeft = lastLayer.position.x - canvasContainerRef.current.clientWidth + 400;
      }
    }
  }, [layers]);

  return (
    <div className="flex h-full">
      <LayerPalette />
      <div
        ref={canvasContainerRef}
        className="relative flex-1 bg-[#0C081D] text-white overflow-x-auto overflow-y-hidden min-h-full"
      >
        <div
          ref={mergeRefs}
          className={`relative min-w-full h-full ${
            isOver ? 'ring-2 ring-blue-500 ring-opacity-50' : ''
          }`}
          style={{ minWidth: `${minWidth}px` }}
        >
          <div className="absolute inset-0 p-4">
            {/* Render connections first so they appear behind the layers */}
            {layers.map((layer, index) => {
              if (index < layers.length - 1) {
                const currentLayer = layer;
                const nextLayer = layers[index + 1];
                return (
                  <LayerConnection
                    key={`connection-${currentLayer.id}-${nextLayer.id}`}
                    startX={currentLayer.position.x}
                    startY={currentLayer.position.y + 100}
                    endX={nextLayer.position.x}
                    endY={nextLayer.position.y}
                    selected={currentLayer.id === selectedLayerId || nextLayer.id === selectedLayerId}
                  />
                );
              }
              return null;
            })}

            {/* Render layers */}
            {layers.map((layer, index) => (
              <div key={layer.id} className="relative">
                <Layer
                  id={layer.id}
                  type={layer.type}
                  neuronCount={layer.neuronCount}
                  position={layer.position}
                  selected={layer.id === selectedLayerId}
                  onClick={() => onLayerSelect(layer)}
                />
              </div>
            ))}
            
            {/* Insertion indicator */}
            {insertionIndex !== null && (
              <div 
                className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-300 opacity-70"
                style={{
                  top: '50%',
                  height: '100px',
                  zIndex: 10
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}