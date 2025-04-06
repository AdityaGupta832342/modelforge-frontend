'use client';
import { useState, useRef } from 'react';
import { useDroppable } from '@dnd-kit/core';
import Layer from './Layer';

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
};

export default function Canvas({ layers, canvasRef, onLayerSelect }: CanvasProps) {
  const { setNodeRef } = useDroppable({ id: 'canvas' });
  const mergeRefs = (node: HTMLDivElement) => {
    setNodeRef(node);
    if (typeof canvasRef === 'function') {
      canvasRef(node);
    } else if (canvasRef) {
      (canvasRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
    }
  };

  return (
    <div
      ref={mergeRefs}
      className="flex-1 flex flex-col items-start gap-4 p-4 bg-[#0C081D] text-white overflow-y-auto"
    >
      {layers.map((layer) => (
        <Layer
          key={layer.id}
          type={layer.type}
          neuronCount={layer.neuronCount}
          position={layer.position}
        />
      ))}
    </div>
  );
}