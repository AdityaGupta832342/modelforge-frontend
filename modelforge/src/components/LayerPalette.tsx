import { useDraggable } from '@dnd-kit/core';

interface LayerType {
  id: string;
  name: string;
  description: string;
  defaultNeurons: number;
  category: string;
}

const layerTypes: LayerType[] = [
  // Input/Output
  {
    id: 'input',
    name: 'Input',
    description: 'Input layer for data',
    defaultNeurons: 3,
    category: 'Input/Output'
  },
  {
    id: 'output',
    name: 'Output',
    description: 'Output layer for predictions',
    defaultNeurons: 1,
    category: 'Input/Output'
  },
  
  // Linear Layers
  {
    id: 'linear',
    name: 'Linear',
    description: 'Fully connected layer',
    defaultNeurons: 64,
    category: 'Linear'
  },
  
  // Convolutional Layers
  {
    id: 'conv2d',
    name: 'Conv2D',
    description: '2D Convolution layer',
    defaultNeurons: 32,
    category: 'Convolution'
  },
  {
    id: 'conv3d',
    name: 'Conv3D',
    description: '3D Convolution layer',
    defaultNeurons: 32,
    category: 'Convolution'
  },
  
  // Pooling Layers
  {
    id: 'maxpool2d',
    name: 'MaxPool2D',
    description: '2D Max Pooling layer',
    defaultNeurons: 1,
    category: 'Pooling'
  },
  {
    id: 'maxpool3d',
    name: 'MaxPool3D',
    description: '3D Max Pooling layer',
    defaultNeurons: 1,
    category: 'Pooling'
  },
  {
    id: 'avgpool2d',
    name: 'AvgPool2D',
    description: '2D Average Pooling layer',
    defaultNeurons: 1,
    category: 'Pooling'
  },
  {
    id: 'avgpool3d',
    name: 'AvgPool3D',
    description: '3D Average Pooling layer',
    defaultNeurons: 1,
    category: 'Pooling'
  },
  
  // Normalization Layers
  {
    id: 'batchnorm1d',
    name: 'BatchNorm1D',
    description: '1D Batch Normalization',
    defaultNeurons: 1,
    category: 'Normalization'
  },
  {
    id: 'batchnorm2d',
    name: 'BatchNorm2D',
    description: '2D Batch Normalization',
    defaultNeurons: 1,
    category: 'Normalization'
  },
  {
    id: 'batchnorm3d',
    name: 'BatchNorm3D',
    description: '3D Batch Normalization',
    defaultNeurons: 1,
    category: 'Normalization'
  },
  
  // Dropout Layers
  {
    id: 'dropout',
    name: 'Dropout',
    description: 'Dropout layer for regularization',
    defaultNeurons: 1,
    category: 'Dropout'
  },
  {
    id: 'dropout2d',
    name: 'Dropout2D',
    description: '2D Dropout layer',
    defaultNeurons: 1,
    category: 'Dropout'
  },
  {
    id: 'dropout3d',
    name: 'Dropout3D',
    description: '3D Dropout layer',
    defaultNeurons: 1,
    category: 'Dropout'
  },
  
  // Activation Functions
  {
    id: 'relu',
    name: 'ReLU',
    description: 'Rectified Linear Unit activation',
    defaultNeurons: 1,
    category: 'Activation'
  },
  {
    id: 'leakyrelu',
    name: 'LeakyReLU',
    description: 'Leaky ReLU activation',
    defaultNeurons: 1,
    category: 'Activation'
  },
  {
    id: 'sigmoid',
    name: 'Sigmoid',
    description: 'Sigmoid activation',
    defaultNeurons: 1,
    category: 'Activation'
  },
  {
    id: 'tanh',
    name: 'Tanh',
    description: 'Hyperbolic tangent activation',
    defaultNeurons: 1,
    category: 'Activation'
  },
  {
    id: 'softmax',
    name: 'Softmax',
    description: 'Softmax activation',
    defaultNeurons: 1,
    category: 'Activation'
  },
  
  // Utility Layers
  {
    id: 'flatten',
    name: 'Flatten',
    description: 'Flattens the input',
    defaultNeurons: 1,
    category: 'Utility'
  },
  {
    id: 'upsample',
    name: 'Upsample',
    description: 'Upsamples the input',
    defaultNeurons: 1,
    category: 'Utility'
  }
];

// Group layers by category
const groupedLayers = layerTypes.reduce((acc, layer) => {
  if (!acc[layer.category]) {
    acc[layer.category] = [];
  }
  acc[layer.category].push(layer);
  return acc;
}, {} as Record<string, LayerType[]>);

export default function LayerPalette() {
  return (
    <div className="w-64 bg-[#1A142B] p-4 rounded-lg shadow-lg h-full overflow-y-auto">
      <h2 className="text-white text-lg font-bold mb-4">Layers</h2>
      <div className="space-y-6">
        {Object.entries(groupedLayers).map(([category, layers]) => (
          <div key={category} className="space-y-2">
            <h3 className="text-gray-400 text-sm font-medium">{category}</h3>
            <div className="space-y-2">
              {layers.map((layer) => (
                <DraggableLayer key={layer.id} layer={layer} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DraggableLayer({ layer }: { layer: LayerType }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: `new-${layer.id}`,
    data: {
      type: layer.id,
      neuronCount: layer.defaultNeurons,
      isLayer: true,
      isNewLayer: true
    }
  });

  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="bg-[#2A214B] p-3 rounded-lg cursor-move hover:bg-[#3A2A5B] transition-colors"
    >
      <div className="text-white font-medium">{layer.name}</div>
      <div className="text-gray-400 text-sm">{layer.description}</div>
    </div>
  );
} 