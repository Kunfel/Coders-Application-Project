import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const TestCases = ({ tests = [] }) => {
    const [selectedTest, setSelectedTest] = useState(tests[0]?.id?.toString());

    const currentTest = tests?.find(test => test.id.toString() === selectedTest);

    const handleSubmit = () => {
        // TODO: Implement submission logic
        console.log('Submitting solution...');
    };

    if (!tests?.length) return null;

    return (
        <div className="h-full flex flex-col bg-light-MainBg dark:bg-dark-MainBg">
            <div className="border-b border-gray-200 dark:border-gray-700 p-2">
                <Select 
                    value={selectedTest} 
                    onValueChange={setSelectedTest}
                >
                    <SelectTrigger className="w-[120px] h-8">
                        <SelectValue placeholder="Test Case" />
                    </SelectTrigger>
                    <SelectContent>
                        {tests.map((test) => (
                            <SelectItem key={test.id} value={test.id.toString()}>
                                Case {test.id}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            <div className="flex-1 p-4 space-y-4">
                <div>
                    <h3 className="text-sm font-medium mb-2">Input:</h3>
                    <div className="bg-slate-50 dark:bg-slate-800 rounded-md p-3">
                        <code className="text-sm">{currentTest?.inputText}</code>
                    </div>
                </div>

                <div>
                    <h3 className="text-sm font-medium mb-2">Expected Output:</h3>
                    <div className="bg-slate-50 dark:bg-slate-800 rounded-md p-3">
                        <code className="text-sm">{currentTest?.outputText}</code>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-200 dark:border-gray-700 p-3">
                <Button 
                    className="w-full"
                    onClick={handleSubmit}
                >
                    Submit
                </Button>
            </div>
        </div>
    );
};

export default TestCases;