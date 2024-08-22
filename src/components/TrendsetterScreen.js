import React from 'react';

const TrendsetterScreen = () => {
  return (
    <div className="p-5 bg-gray-100 rounded-lg">
      <div className="bg-white p-5 rounded-lg mb-5">
        <h2 className="text-lg mb-2 font-semibold">Offsetter Trendsetter</h2>
        <div className="flex items-start">
          <div className="text-center mr-4">
            <h3 className="text-green-600 text-6xl font-bold leading-none">450</h3>
            <p className="text-sm font-medium">Points</p>
          </div>
          <p className="text-base mt-2">...like an OG but an OT.</p>
        </div>
        <div className="bg-green-100 p-4 rounded text-center my-4">
          <p className="text-lg font-semibold">You are 50 points away from reaching Tree Hugger status</p>
        </div>
        <div className="flex justify-between mt-4">
          <div className="bg-purple-600 h-2 w-1/12"></div>
          <div className="bg-blue-600 h-2 w-2/12"></div>
          <div className="bg-teal-400 h-2 w-3/12"></div>
          <div className="bg-yellow-400 h-2 w-2/12"></div>
          <div className="bg-[#8B4513] h-2 w-3/12"></div>
          <div className="bg-pink-600 h-2 w-1/12"></div>
        </div>
        <button className="bg-gray-200 border-none py-2 px-4 rounded cursor-pointer mt-4">
          View detailed stats
        </button>
      </div>
    </div>
  );
};

export default TrendsetterScreen;
