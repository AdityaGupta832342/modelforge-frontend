'use client';
import { useParams } from 'next/navigation';
import { useState, useRef } from 'react';
import { DndContext, DragEndEvent, DragStartEvent, DragOverlay, UniqueIdentifier } from '@dnd-kit/core';
//@ts-ignore
import LayerItem from '@/components/LayerItem';
//@ts-ignore
import Canvas, { LayerData } from '@/components/Canvas';

export default function ModelBuilderPage() {
  const params = useParams();
  const modelId = params?.modelId;
  const [selectedLayer, setSelectedLayer] = useState(null as { type: string } | null);
  const [layers, setLayers] = useState<LayerData[]>([]);
  const canvasRef = useRef<HTMLDivElement>(null);
  
  // New state for active draggable item
  const [activeDraggable, setActiveDraggable] = useState<null | {
      id: UniqueIdentifier;
      data: { type: string; neuronCount: number };
    }>(null);

  const pytorchLayers = [
    'Input',
    'Output',
    'Linear',
    'Conv2d',
    'Conv3d',
    'MaxPool2d',
    'MaxPool3d',
    'AvgPool2d',
    'AvgPool3d',
    'BatchNorm1d',
    'BatchNorm2d',
    'BatchNorm3d',
    'Dropout',
    'Dropout2d',
    'Dropout3d',
    'ReLU',
    'LeakyReLU',
    'Sigmoid',
    'Tanh',
    'Softmax',
    'Flatten',
    'Upsample',
  ];

  const handleDragStart = (event: DragStartEvent) => {
    // Extract and store active draggable payload
    const { id, data } = event.active;
    const currentData = data.current as { type: string; neuronCount: number } | undefined;
    if (currentData) {
      setActiveDraggable({ id, data: currentData });
    }
  };

  const handleDragEnd = (event: DragEndEvent) => {
    setActiveDraggable(null);
    if (event.over?.id === 'canvas' && event.activatorEvent) {
      // Get the mouse event position
      const mouseEvent = event.activatorEvent as MouseEvent;
      if (!canvasRef.current) return;
      const canvasRect = canvasRef.current.getBoundingClientRect();
      const relativePosition = {
        x: mouseEvent.clientX - canvasRect.left,
        y: mouseEvent.clientY - canvasRect.top,
      };

      // Retrieve the payload set in LayerItem via useDraggable
      const { type, neuronCount } = (event.active.data.current || {}) as {
        type: string;
        neuronCount: number;
      };

      const newLayer: LayerData = {
        id: `${Date.now()}`,
        type,
        neuronCount,
        position: relativePosition,
      };

      // Determine the drop index based on relative Y coordinate
      setLayers((prev) => {
        const dropIndex = prev.findIndex(
          (layer) => relativePosition.y < layer.position.y
        );
        const updatedLayers = [...prev];
        if (dropIndex === -1) {
          updatedLayers.push(newLayer);
        } else {
          updatedLayers.splice(dropIndex, 0, newLayer);
        }
        return updatedLayers;
      });
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

  const renderConfigFields = (layer: any) => {
    switch (layer.type) {
      case 'Input':
      case 'Output':
        return (
          <>
            <input
              className="w-full p-2 mb-3 bg-[#2A214B] rounded"
              placeholder="Dimensions (e.g., 3, 64, 64)"
            />
          </>
        );
      case 'Linear':
        return (
          <>
            <input className="w-full p-2 mb-3 bg-[#2A214B] rounded" placeholder="in_features" />
            <input className="w-full p-2 mb-3 bg-[#2A214B] rounded" placeholder="out_features" />
          </>
        );
      case 'Conv2d':
        return (
          <>
            <input className="w-full p-2 mb-3 bg-[#2A214B] rounded" placeholder="in_channels" />
            <input className="w-full p-2 mb-3 bg-[#2A214B] rounded" placeholder="out_channels" />
            <input className="w-full p-2 mb-3 bg-[#2A214B] rounded" placeholder="kernel_size" />
            <input className="w-full p-2 mb-3 bg-[#2A214B] rounded" placeholder="stride" />
            <input className="w-full p-2 mb-3 bg-[#2A214B] rounded" placeholder="padding" />
          </>
        );
      case 'Dropout':
        return (
          <input className="w-full p-2 mb-3 bg-[#2A214B] rounded" placeholder="dropout_rate (0.0 - 1.0)" />
        );
      case 'ReLU':
      case 'Sigmoid':
      case 'Tanh':
      case 'Softmax':
        return <p className="text-gray-400">No configurable parameters</p>;
      default:
        return <p className="text-gray-400">No configurable parameters</p>;
    }
  };

  return (
    <div className="h-screen flex flex-col bg-[#0C081D] text-white">
      {/* Top Navbar remains unchanged if any */}
      <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <DragOverlay>{renderDragOverlay()}</DragOverlay>
        <div className="flex flex-1 overflow-hidden">
          {/* Left Pane - Layer Palette */}
          <div className="w-64 bg-[#1A1533] border-r border-white/10 p-4 overflow-y-auto">
            <h2 className="text-lg font-semibold mb-4">Layers</h2>
            <div className="flex flex-col gap-3">
              {pytorchLayers.map((type) => (
                <LayerItem 
                  key={type} 
                  type={type} 
                  id={type} 
                  position={{ x: 0, y: 0 }} 
                  neuronCount={0} 
                  selected={false} 
                  onClick={() => setSelectedLayer({ type })}
                />
              ))}
            </div>
          </div>

          {/* Canvas - Center */}
          <div className="flex-1 overflow-auto">
            <Canvas
              layers={layers}
              canvasRef={canvasRef}
              onLayerSelect={(layer: LayerData) => setSelectedLayer(layer)}
            />
          </div>

          {/* Right Pane - Hyperparameter Form */}
          <div className="w-80 bg-[#1A1533] border-l border-white/10 p-4 overflow-y-auto sticky top-0">
            <h2 className="text-lg font-semibold mb-4">Layer Config</h2>
            {!selectedLayer ? (
              <p className="text-gray-400">Select a layer to configure</p>
            ) : (
              <div>{renderConfigFields(selectedLayer)}</div>
            )}
          </div>
        </div>
      </DndContext>
    </div>
  );
}
