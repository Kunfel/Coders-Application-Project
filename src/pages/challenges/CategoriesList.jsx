import React from 'react';

const CategoriesList = () => {
  const categories = ["All", "Data structure", "Graphs", "Databases"];
  
  return (
    <div className='bg-light-MainBg dark:bg-dark-MainBg'>
    <p className="text-lg text-left font-bold mb-6 text-gray-800 dark:text-white ">
    Select Categories
    </p>
    <div className="flex flex-wrap gap-2 pb-5"> 
      {categories.map((category) => (
        <Category key={category} name={category} />
      ))}
    </div>
    </div>
  );
};

const Category = ({ name }) => (
  <div className="px-4 py-2 bg-blue-100 dark:bg-blue-600 rounded-full text-gray-700 dark:text-white hover:text-white hover:bg-purple-600 dark:hover:bg-purple-800 cursor-pointer">
    {name}
  </div>
);

export default CategoriesList;