import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Card } from '@/components/ui/card';

const ChallengeDescription = ({ challenge }) => {
    if (!challenge) return null;

    return (
        <div className="h-full overflow-auto bg-light-MainBg dark:bg-dark-MainBg">
            <div className="border-b border-gray-200 dark:border-gray-700 p-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-xl font-semibold">{challenge.title}</h1>
                    <div className="flex items-center space-x-2">
                        <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                            {challenge.status}
                        </span>
                        <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                            {challenge.difficulty}
                        </span>
                    </div>
                </div>
            </div>
            
            <div className="p-6">
                <div className="prose dark:prose-invert max-w-none">
                    <ReactMarkdown>{challenge.description}</ReactMarkdown>
                </div>
            </div>
        </div>
    );
};

export default ChallengeDescription;