import React, { useState } from 'react';
import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';

function App() {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  // Add functions to update nodes and edges state
  const updateNodes = (newNodes) => {
    setNodes(newNodes);
  };

  const updateEdges = (newEdges) => {
    setEdges(newEdges);
  };

  return (
    <div>
      <PipelineToolbar />``
      <PipelineUI updateNodes={updateNodes} updateEdges={updateEdges} />
      <SubmitButton nodes={nodes} edges={edges} />
    </div>
  );
}

export default App;
