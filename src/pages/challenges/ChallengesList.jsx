import React, { useState } from 'react';
import { BsCheck2Circle } from 'react-icons/bs';
import { LuFileSpreadsheet } from 'react-icons/lu';
import { FaRegHourglass } from 'react-icons/fa';
import CategoriesList from './CategoriesList';
import TrendingCategoriesBox from './TrendingCategoriesBox';
import TopKCodersList from './TopKCodersList';
import { useGetChallengesQuery } from '../../api/graphql';

const ChallengesList = () => {
    const [tooltipVisible, setTooltipVisible] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const { data, isLoading, error } = useGetChallengesQuery(selectedCategory);
    const challenges = data?.challenges || [];

    if (isLoading) {
        return <div>Loading challenges...</div>;
    }

    if (error) {
        return <div>Error loading challenges: {error.message}</div>;
    }

    const getStatusIcon = (status) => {
        switch (status) {
            case 'Completed':
                return <BsCheck2Circle className="text-green-500" />;
            case 'Attempted':
                return <FaRegHourglass className="text-yellow-500" />;
            default:
                return <LuFileSpreadsheet className="text-gray-500" />;
        }
    };

    return (
        <div className="flex flex-col lg:flex-row gap-6 p-6">
            <div className="lg:w-3/4">
                <div className="mb-8">
                    <CategoriesList onCategorySelect={setSelectedCategory} />
                </div>

                <div className="space-y-4">
                    {challenges.map((challenge) => (
                        <div
                            key={challenge._id}
                            className="bg-white dark:bg-dark-SecondaryBg p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
                            onMouseEnter={() => setTooltipVisible(challenge._id)}
                            onMouseLeave={() => setTooltipVisible(null)}
                        >
                            <div className="flex justify-between items-center">
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                                    {challenge.title}
                                </h3>
                                <div className="flex items-center space-x-4">
                                    <span className="text-sm text-gray-600 dark:text-gray-300">
                                        Solution Rate: {challenge.solutionRate}%
                                    </span>
                                    {getStatusIcon(challenge.status)}
                                </div>
                            </div>

                            <div className="mt-4 flex items-center space-x-4">
                                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm">
                                    {challenge.category}
                                </span>
                                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 rounded-full text-sm">
                                    {challenge.difficulty}
                                </span>
                            </div>

                            {tooltipVisible === challenge._id && (
                                <div className="absolute mt-2 p-2 bg-gray-800 text-white text-sm rounded shadow-lg">
                                    Click to view challenge details
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className="lg:w-1/4 space-y-6">
                <TrendingCategoriesBox />
                <TopKCodersList />
            </div>
        </div>
    );
};

export default ChallengesList;
