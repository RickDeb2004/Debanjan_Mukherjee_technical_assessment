import { useState } from 'react';
import BaseNode from './baseNode';

export const CustomNode4 = ({ id, data }) => {
  const [radioValue, setRadioValue] = useState(data?.radioValue || 'option1');

  const handleRadioChange = (e) => setRadioValue(e.target.value);

  const handles = [
    { type: 'source', position: 'right', id: `${id}-radioOutput` }
  ];

  return (
    <BaseNode id={id} title="Custom Node 4" handles={handles}>
      <label>
        <input type="radio" value="option1" checked={radioValue === 'option1'} onChange={handleRadioChange} />
        Option 1
      </label>
      <label>
        <input type="radio" value="option2" checked={radioValue === 'option2'} onChange={handleRadioChange} />
        Option 2
      </label>
    </BaseNode>
  );
};
