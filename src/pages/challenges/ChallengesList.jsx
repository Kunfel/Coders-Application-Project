import React, { useState } from 'react';
import { BsCheck2Circle } from 'react-icons/bs';
import { LuFileSpreadsheet } from 'react-icons/lu';
import { FaRegHourglass } from 'react-icons/fa';
import CategoriesList from './CategoriesList';
import TrendingCategoriesBox from './TrendingCategoriesBox';
import TopKCodersList from './TopKCodersList';

const ChallengesList = () => {
    const [tooltipVisible, setTooltipVisible] = useState(null);
    
    const challenges = [
        {
            id: 145,
            title: "Two-sum",
            category: "Data structure",
            Difficulty: "Easy",
            status: "Completed",
            solutionRate: "45%",
        },
        {
            id: 146,
            title: "Fibonacci series",
            category: "Data structure",
            Difficulty: "Moderate",
            status: "Attempted",
            solutionRate: "45%",
        },
        {
            id: 147,
            title: "Fibonacci series",
            category: "Data structure",
            Difficulty: "Hard",
            status: "Pending",
            solutionRate: "45%",
        }
    ];

    const getStatusIcon = (status) => {
        switch (status) {
            case "Completed":
                return <BsCheck2Circle className="text-gray-500 text-xl" />;
            case "Attempted":
                return <LuFileSpreadsheet className="text-blue-500 text-xl" />;
            case "Pending":
                return <FaRegHourglass className="text-yellow-500 text-xl" />;
            default:
                return null;
        } 
    };

    const getStatusDescription = (status) => {
        switch (status) {
            case "Completed":
                return "Completed";
            case "Attempted":
                return "not yet completed ";
            case "Pending":
                return "You haven't started this challenge yet";
            default:
                return "";
        }
    };

    const getDifficultyColor = (difficulty) => {
        switch (difficulty.toLowerCase()) {
            case "easy":
                return "bg-green-500 px-2 rounded-full";
            case "moderate":
                return "bg-yellow-500 px-2 rounded-full";
            case "hard":
                return "bg-red-500 px-2 rounded-full";
        }
    };

    return (
        <div className="bg-light-MainBg dark:bg-dark-MainBg p-6">
            <h2 className="text-3xl font-bold mb-6 text-left text-gray-800 dark:text-white">Challenges</h2>
            <div className="overflow-x-auto">
            <CategoriesList />
                <table className="w-full shadow-lg">
                    <thead>
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-700  font-medium text-gray-500 dark:text-white ">
                            <th className="px-6 py-3 text-left">Status</th>
                            <th className="">Title</th>
                            <th className="">Category</th>
                            <th className="">Difficulty</th>
                            <th className="">Solution Rate</th>
                        </tr>
                    </thead>
                    <tbody className="bg-light-MainBg dark:bg-dark-MainBg divide-y divide-gray-200 dark:divide-gray-700">
                        {challenges.map(challenge => (
                            <tr key={challenge.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                                <div className="relative flex items-center space-x-2"
                                        onMouseEnter={() => setTooltipVisible(challenge.id)}
                                        onMouseLeave={() => setTooltipVisible(null)}
                                    >
                                        {getStatusIcon(challenge.status)}
                                        <span>{challenge.status}</span>
                                        
                                        {/* Tooltip */}
                                        {tooltipVisible === challenge.id && (
                                            <div className="absolute bottom-full left-0 mb-2 w-48 bg-gray-900 text-white text-xs rounded py-1 px-2">
                                                {getStatusDescription(challenge.status)}
                                            </div>
                                        )}
                                    </div>
                                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {challenge.title}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap  text-gray-500 dark:text-gray-300">
                                    {challenge.category}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap ">
                                    <span className={`font-medium ${getDifficultyColor(challenge.Difficulty)}`}>
                                        {challenge.Difficulty}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-300">
                                    {challenge.solutionRate}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300"> </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <TrendingCategoriesBox />
                <TopKCodersList />
            </div>
        </div>
    );
};

export default ChallengesList;
