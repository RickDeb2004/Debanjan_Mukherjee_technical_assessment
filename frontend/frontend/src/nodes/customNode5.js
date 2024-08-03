import { useState } from 'react';
import BaseNode from './baseNode';

export const CustomNode5 = ({ id, data }) => {
  const [textValue, setTextValue] = useState(data?.textValue || 'Hello World');

  const handleTextChange = (e) => setTextValue(e.target.value);

  const handles = [
    { type: 'source', position: 'right', id: `${id}-textOutput` }
  ];

  return (
    <BaseNode id={id} title="Custom Node 5" handles={handles}>
      <label>
        Text:
        <input type="text" value={textValue} onChange={handleTextChange} />
      </label>
    </BaseNode>
  );
};
