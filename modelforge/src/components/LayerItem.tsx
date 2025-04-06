'use client';
import { useDraggable } from '@dnd-kit/core';

interface LayerItemProps {
  type: string;
  id: string;
  position: { x: number; y: number };
  neuronCount: number;
  selected: boolean;
  onClick: () => void;
}

export default function LayerItem({
  type,
  id,
  position,
  neuronCount,
  selected,
  onClick,
}: LayerItemProps) {
  const { attributes, listeners, setNodeRef, transform, active } = useDraggable({
    id,
    data: { type, neuronCount },
  });

  const style = transform
    ? { transform: `translate(${transform.x}px, ${transform.y}px)` }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      onClick={onClick}
      className={`flex flex-col items-center p-4 bg-[#2A214B] rounded-lg shadow-md cursor-pointer ${
        selected ? 'border-2 border-blue-500' : 'border border-gray-500'
      } ${active ? 'opacity-50' : 'opacity-100'}`}
    >
      <h3 className="text-white font-semibold">{type}</h3>
      <div className="mt-2 flex flex-wrap justify-center gap-1">
        {Array.from({ length: neuronCount }).map((_, i) => (
          <div key={i} className="w-3 h-3 bg-white rounded-full"></div>
        ))}
      </div>
    </div>
  );
}