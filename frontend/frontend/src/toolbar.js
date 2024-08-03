// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div style={{ padding: '10px' }}>
            <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
                <DraggableNode type='customNode1' label=' Node 1' />
                <DraggableNode type='customNode2' label=' Node 2' />
                <DraggableNode type='customNode3' label=' Node 3' />
                <DraggableNode type='customNode4' label=' Node 4' />
                <DraggableNode type='customNode5' label=' Node 5' />


            </div>
        </div>
    );
};
