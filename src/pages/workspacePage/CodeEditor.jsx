import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { python } from '@codemirror/lang-python';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const CodeEditor = () => {
    const [language, setLanguage] = React.useState('javascript');
    const [fontSize, setFontSize] = React.useState('14');
    const [code, setCode] = React.useState('// Write your solution here\n');

    const handleLanguageChange = (value) => {
        setLanguage(value);
        if (value === 'javascript') {
            setCode('// Write your solution here\n');
        } else {
            setCode('# Write your solution here\n');
        }
    };

    return (
        <div className="h-full flex flex-col bg-light-MainBg dark:bg-dark-MainBg">
            <div className="border-b border-gray-200 dark:border-gray-700 p-2 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <Select value={language} onValueChange={handleLanguageChange}>
                        <SelectTrigger className="w-[120px] h-8">
                            <SelectValue placeholder="Language" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="javascript">JavaScript</SelectItem>
                            <SelectItem value="python">Python</SelectItem>
                        </SelectContent>
                    </Select>

                    <Select value={fontSize} onValueChange={setFontSize}>
                        <SelectTrigger className="w-[80px] h-8">
                            <SelectValue placeholder="Size" />
                        </SelectTrigger>
                        <SelectContent>
                            {[12, 14, 16, 18, 20].map(size => (
                                <SelectItem key={size} value={size.toString()}>
                                    {size}px
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className="flex-1">
                <CodeMirror
                    value={code}
                    height="100%"
                    theme={vscodeDark}
                    extensions={[language === 'javascript' ? javascript() : python()]}
                    onChange={(value) => setCode(value)}
                    style={{ fontSize: `${fontSize}px` }}
                    className="h-full"
                />
            </div>
        </div>
    );
};

export default CodeEditor;