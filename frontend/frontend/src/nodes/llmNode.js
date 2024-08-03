import BaseNode from './baseNode';

export const LLMNode = ({ id }) => {
  const handles = [
    { type: 'target', position: 'left', id: `${id}-system`, style: { top: `${100 / 3}%` } },
    { type: 'target', position: 'left', id: `${id}-prompt`, style: { top: `${200 / 3}%` } },
    { type: 'source', position: 'right', id: `${id}-response` }
  ];

  return (
    <BaseNode id={id} title="LLM" handles={handles}>
      <span>This is an LLM.</span>
    </BaseNode>
  );
};
