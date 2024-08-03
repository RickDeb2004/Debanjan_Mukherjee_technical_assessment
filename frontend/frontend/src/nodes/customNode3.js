import { useState } from 'react';
import BaseNode from './baseNode';

export const CustomNode3 = ({ id, data }) => {
  const [checked, setChecked] = useState(data?.checked || false);

  const handleCheckedChange = (e) => setChecked(e.target.checked);

  const handles = [
    { type: 'source', position: 'right', id: `${id}-checkedOutput` }
  ];

  return (
    <BaseNode id={id} title="Custom Node 3" handles={handles}>
      <label>
        Checked:
        <input type="checkbox" checked={checked} onChange={handleCheckedChange} />
      </label>
    </BaseNode>
  );
};
