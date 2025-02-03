import React from 'react';
import Split from 'react-split';
import CodeEditor from './CodeEditor';
import TestCases from './TestCases';

const Playground = ({ challenge }) => {
    return (
        <Split
            sizes={[60, 40]}
            minSize={200}
            expandToMin={false}
            gutterSize={10}
            gutterAlign="center"
            snapOffset={30}
            dragInterval={1}
            direction="vertical"
            cursor="row-resize"
            className="split h-full"
        >
            <CodeEditor />
            <TestCases tests={challenge?.tests} />
        </Split>
    );
};

export default Playground;