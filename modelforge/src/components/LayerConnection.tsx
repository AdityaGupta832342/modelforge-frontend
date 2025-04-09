interface LayerConnectionProps {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  selected: boolean;
}

export default function LayerConnection({ startX, startY, endX, endY, selected }: LayerConnectionProps) {
  // Calculate the control points for the quadratic Bezier curve
  const controlX = (startX + endX) / 2;
  
  // Create the SVG path
  const path = `M ${startX} ${startY} Q ${controlX} ${startY} ${controlX} ${(startY + endY) / 2} T ${endX} ${endY}`;
  
  return (
    <svg
      className="absolute top-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    >
      <path
        d={path}
        fill="none"
        stroke={selected ? '#60A5FA' : '#4B5563'}
        strokeWidth={selected ? 3 : 2}
        strokeDasharray={selected ? 'none' : '5,5'}
        className="transition-all duration-200"
      />
    </svg>
  );
} 