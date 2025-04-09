'use client';
import { useDraggable } from '@dnd-kit/core';
import Neuron from './Neuron';

interface LayerProps {
  id: string;
  type: string;
  neuronCount: number;
  position: { x: number; y: number };
  selected: boolean;
  onClick: () => void;
}

const getLayerColor = (type: string) => {
  // Group colors by category
  if (type === 'input' || type === 'output') {
    return 'bg-indigo-600';
  } else if (type === 'linear') {
    return 'bg-blue-600';
  } else if (type.startsWith('conv')) {
    return 'bg-green-600';
  } else if (type.includes('pool')) {
    return 'bg-purple-600';
  } else if (type.includes('batchnorm')) {
    return 'bg-cyan-600';
  } else if (type.includes('dropout')) {
    return 'bg-red-600';
  } else if (['relu', 'leakyrelu', 'sigmoid', 'tanh', 'softmax'].includes(type)) {
    return 'bg-yellow-600';
  } else if (['flatten', 'upsample'].includes(type)) {
    return 'bg-orange-600';
  } else {
    return 'bg-gray-600';
  }
};

const getLayerIcon = (type: string) => {
  // Input/Output
  if (type === 'input') return '📥';
  if (type === 'output') return '📤';
  
  // Linear
  if (type === 'linear') return '🔷';
  
  // Convolution
  if (type === 'conv2d') return '🔶';
  if (type === 'conv3d') return '🔷';
  
  // Pooling
  if (type === 'maxpool2d') return '⬡';
  if (type === 'maxpool3d') return '⬢';
  if (type === 'avgpool2d') return '⬡';
  if (type === 'avgpool3d') return '⬢';
  
  // Normalization
  if (type.includes('batchnorm')) return '⚖️';
  
  // Dropout
  if (type.includes('dropout')) return '❌';
  
  // Activation
  if (type === 'relu') return '📈';
  if (type === 'leakyrelu') return '📉';
  if (type === 'sigmoid') return 'S';
  if (type === 'tanh') return 'T';
  if (type === 'softmax') return 'SM';
  
  // Utility
  if (type === 'flatten') return '📏';
  if (type === 'upsample') return '⬆️';
  
  return '⬡';
};

export default function Layer({ id, type, neuronCount, position, selected, onClick }: LayerProps) {
  const { attributes, listeners, setNodeRef, transform, active } = useDraggable({
    id,
    data: { 
      type,
      neuronCount,
      isLayer: true,
      isExistingLayer: true
    },
    disabled: false,
  });

  const style = transform
    ? { 
        transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%) translate(${transform.x}px, ${transform.y}px)`,
        minWidth: '120px'
      }
    : { 
        transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
        minWidth: '120px'
      };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      onClick={onClick}
      className={`absolute flex flex-col items-center gap-4 p-4 ${getLayerColor(type)} rounded-lg shadow-lg border ${
        selected ? 'border-blue-500 border-2' : 'border-gray-500'
      } cursor-move hover:opacity-90 transition-opacity`}
    >
      <div className="text-white font-bold text-sm flex items-center gap-2">
        <span>{getLayerIcon(type)}</span>
        <span>{type}</span>
      </div>
      <div className="flex flex-col gap-2">
        {Array.from({ length: neuronCount }).map((_, i) => (
          <Neuron key={i} />
        ))}
      </div>
    </div>
  );
}