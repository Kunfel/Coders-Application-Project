import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Split from 'react-split';
import ChallengeDescription from './ChallengeDescription';
import CodeEditor from './CodeEditor';
import TestCases from './TestCases';
import Navbar from '../../_components/Navbar';

const Workspace = () => {
    const { challengeId } = useParams();
    
    // Sample challenge data - this would come from your backend in production
    const challenge = {
        id: challengeId,
        title: "Two-sum",
        description: `
### Problem Statement:
Given an array of integers \`nums\` and an integer \`target\`, return indices of the two numbers such that they add up to \`target\`. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.

### Example:
Input: \`nums = [2,7,11,15]\`, \`target = 9\`
Output: \`[0,1]\`
Explanation: \`nums[0] + nums[1] = 2 + 7 = 9\`, so the answer is \`[0,1]\`.

### Constraints:
- \`2 <= nums.length <= 10^4\`
- \`-10^9 <= nums[i] <= 10^9\`
- \`-10^9 <= target <= 10^9\`
- Only one valid answer exists.
`,
        difficulty: "Easy",
        category: "arrays",
        status: "Not Started",
        tests: [
            {
                id: 1,
                inputText: "[2,7,11,15], 9",
                outputText: "[0,1]"
            },
            {
                id: 2,
                inputText: "[3,2,4], 6",
                outputText: "[1,2]"
            }
        ]
    };

    return (
        <>
        <Navbar />
        <div className="h-screen">
            <div className="bg-light-MainBg dark:bg-dark-MainBg">
                <Split 
                    sizes={[40, 60]}
                    minSize={300}
                    expandToMin={false}
                    gutterSize={10}
                    gutterAlign="center"
                    snapOffset={30}
                    dragInterval={1}
                    direction="horizontal"
                    cursor="col-resize"
                    className="split h-full"
                >
                    <ChallengeDescription challenge={challenge} />
                    <div className="h-full">
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
                    </div>
                </Split>
            </div>
        </div>
        </>
    );
};

export default Workspace;