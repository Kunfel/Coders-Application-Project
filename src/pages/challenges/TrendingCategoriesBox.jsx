import React from 'react';

const trendingCategories = [
  {
    category: "Graphs",
    count: 100
  },
  {
    category: "Stacks",
    count: 45
  },
  {
    category: "Algorthims",
    count: 20
  },
  {
    category: "Databases",
    count: 3
  }
];

const TrendingCategoriesBox = () => {
  return (
    <div className="bg-light-MainBg dark:bg-dark-MainBg dark:text-white rounded-lg p-4">
      <h2 className="text-lg  font-bold mb-4">Trending Categories</h2>
      <div className="flex items-center justify-center flex-wrap gap-2">
        {trendingCategories.map((item) => (
          <div 
            key={item.category}
            className="py-3 px-4 bg-gray-100 dark:bg-gray-600 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer "
          >
            <span>{item.category}</span>
            <span className="bg-blue-100 dark:bg-blue-900 dark:text-white mx-2 px-3 py-1 rounded-full text-sm">
              {item.count}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingCategoriesBox;