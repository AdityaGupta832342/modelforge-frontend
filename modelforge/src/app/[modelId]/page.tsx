'use client';
import { useParams } from 'next/navigation';

export default function ModelBuilderPage() {
  const params = useParams();
  const modelId = params?.modelId;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Model Builder: {modelId}</h1>
      <p className="text-gray-600 mt-4">Let’s start building your neural network!</p>
    </div>
  );
}
