'use client';
import Neuron from './Neuron';

interface LayerProps {
  type: string;
  neuronCount: number;
  position: { x: number; y: number }; // Add position prop
}

export default function Layer({ type, neuronCount, position }: LayerProps) {
  return (
    <div
      className="absolute flex flex-col items-center gap-2 p-4 bg-[#1A1533] rounded shadow"
      style={{ top: position.y, left: position.x }} // Apply position
    >
      <div className="text-white font-bold">{type}</div>
      <div className="flex flex-col gap-2">
        {Array.from({ length: neuronCount }).map((_, i) => (
          <Neuron key={i} />
        ))}
      </div>
    </div>
  );
}