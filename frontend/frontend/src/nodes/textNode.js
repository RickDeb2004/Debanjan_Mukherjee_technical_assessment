import { useState, useEffect } from 'react';
import BaseNode from './baseNode';
import { Handle, Position } from 'reactflow';

const variableRegex = /\{\{(\w+)\}\}/g;

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [nodeSize, setNodeSize] = useState({ width: 200, height: 80 });
  const [variables, setVariables] = useState([]);

  useEffect(() => {
    // Adjust node size based on text length
    const textLength = currText.length;
    const newWidth = Math.max(200, textLength * 8); // 8 is an approximate width of a character
    const newHeight = Math.max(80, Math.ceil(textLength / 20) * 20); // Adjust height based on text length
    setNodeSize({ width: newWidth, height: newHeight });

    // Extract variables from the text
    const extractedVariables = [];
    let match;
    while ((match = variableRegex.exec(currText)) !== null) {
      extractedVariables.push(match[1]);
    }
    setVariables(extractedVariables);
  }, [currText]);

  const handleTextChange = (e) => setCurrText(e.target.value);

  const handles = [
    ...variables.map((variable, index) => ({
      type: 'target',
      position: Position.Left,
      id: `${id}-${variable}`,
      style: { top: `${(index + 1) * 20}px` },
    })),
    { type: 'source', position: Position.Right, id: `${id}-output` },
  ];

  const textareaStyle = {
    width: '100%',
    height: '50px',
    borderRadius: '8px',
    border: '1px solid #d6d9df',
    padding: '8px',
    resize: 'none',
    boxSizing: 'border-box',
    outline: 'none',
    fontSize: '14px',
    color: '#333',
    backgroundColor: '#f9fafb',
  };

  const labelStyle = {
    display: 'block',
    fontSize: '12px',
    color: '#666',
    marginBottom: '4px',
  };

  return (
    <BaseNode id={id} title="Text" handles={handles}>
      <div style={{ width: nodeSize.width, height: nodeSize.height }}>
        <label style={labelStyle}>
          Text:
          <textarea 
            value={currText} 
            onChange={handleTextChange} 
            style={textareaStyle}
          />
        </label>
      </div>
    </BaseNode>
  );
};
