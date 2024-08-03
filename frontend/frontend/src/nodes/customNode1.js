import { useState } from 'react';
import BaseNode from './baseNode';

export const CustomNode1 = ({ id, data }) => {
  const [customValue, setCustomValue] = useState(data?.customValue || 'Default');

  const handleCustomChange = (e) => setCustomValue(e.target.value);

  const handles = [
    { type: 'source', position: 'right', id: `${id}-customOutput` },
    { type: 'target', position: 'left', id: `${id}-customInput` }
  ];

  return (
    <BaseNode id={id} title="Custom Node 1" handles={handles}>
      <label>
        Custom Value:
        <input type="text" value={customValue} onChange={handleCustomChange} />
      </label>
    </BaseNode>
  );
};
