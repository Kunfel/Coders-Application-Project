import React from 'react';
import { FaTrophy, FaMedal, FaAward, FaUser } from 'react-icons/fa';

const TopKCodersList = () => {
    const topCoders = [
        { id: 101, first_name: "Alice", last_name: "Johnson", avatar_url: "https://i.pravatar.cc/150?img=1", score: 350 },
        { id: 102, first_name: "Bob", last_name: "Smith", avatar_url: "https://i.pravatar.cc/150?img=2", score: 320 },
        { id: 103, first_name: "Emily", last_name: "Davis", avatar_url: "https://i.pravatar.cc/150?img=5", score: 290 },
        { id: 104, first_name: "Michael", last_name: "Brown", avatar_url: "https://i.pravatar.cc/150?img=4", score: 270 }
    ];

    const getRankIcon = (index) => {
        switch (index) {
            case 0:
                return <FaTrophy className="text-yellow-500 text-2xl" title="1st Place" />;
            case 1:
                return <FaMedal className="text-gray-400 text-2xl" title="2nd Place" />;
            case 2:
                return <FaAward className="text-amber-700 text-2xl" title="3rd Place" />;
            default:
                return <FaUser className="text-gray-400 text-xl" title={`${index + 1}th Place`} />;
        }
    };

    return (
        <div className="bg-light-MainBg dark:bg-dark-MainBg">
            <h2 className="text-2xl font-bold mb-6 dark:text-white flex space-x-2">
               Top 4 Coders
            </h2>
            
            <div className="space-y-4 w-[500px]">
                {topCoders.map((coder, index) => (
                    <div 
                        key={coder.id}
                        className={`flex items-center space-x-4 p-4 rounded-lg transition-colors shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700
                            ${index === 0 ? 'bg-gray-50 dark:bg-gray-700/50' : 
                            index === 1 ? 'bg-gray-50 dark:bg-gray-700/50' :
                            index === 2 ? 'bg-gray-50 dark:bg-gray-700/50' :
                            'bg-gray-50 dark:bg-gray-700/50'}`}
                    >
                        <div className="flex-shrink-0">
                            {getRankIcon(index)}
                        </div>
                        
                        <div className="flex-shrink-0">
                            <img 
                                src={coder.avatar_url} 
                                alt={`${coder.first_name} ${coder.last_name}`} 
                                className="w-12 h-12 rounded-full border-2 border-gray-200 dark:border-gray-600"
                            />
                        </div>
                        
                        <div className="flex justify-between flex-grow items-center ">
                            <h3 className="font-bold text-gray-900 dark:text-white">
                                {coder.first_name} {coder.last_name}
                            </h3>
                            <p className="text-gray-500 font-bold dark:text-gray-200">
                                Score: {coder.score}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopKCodersList;
