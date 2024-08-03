import { useState } from 'react';
import BaseNode from './baseNode';

export const CustomNode2 = ({ id, data }) => {
  const [sliderValue, setSliderValue] = useState(data?.sliderValue || 50);

  const handleSliderChange = (e) => setSliderValue(e.target.value);

  const handles = [
    { type: 'source', position: 'right', id: `${id}-sliderOutput` }
  ];

  return (
    <BaseNode id={id} title="Custom Node 2" handles={handles}>
      <label>
        Slider:
        <input type="range" min="0" max="100" value={sliderValue} onChange={handleSliderChange} />
      </label>
    </BaseNode>
  );
};
