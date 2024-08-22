import React from 'react';
import Avatar3 from '../assets/avatar3.avif';
import WasteDistributionChart from './WasteDistributionChart';

const MyStatsPage = () => {
  return (
    <div className="p-5 bg-gray-50 rounded-lg mt-14"> {/* Add margin-top for spacing */}
      <div className="flex items-center">
        <img src={Avatar3} alt="Avatar" className="w-20 h-20 rounded-full object-cover" /> {/* Profile picture */}
        <div className="ml-4">
          <h2 className="text-xl font-bold">Valerie</h2> {/* Name */}
          <p className="text-gray-600">Offsetter Trendsetter</p> {/* Title */}
        </div>
      </div>
      <div className="flex justify-around items-center mt-6">
        <div className="text-center">
          <h3 className="text-3xl font-bold text-green-600">450</h3>
          <p className="text-gray-600">Points</p>
        </div>
        <div className="text-center">
          <h3 className="text-3xl font-bold text-green-600">85%</h3>
          <p className="text-gray-600">Recycling Rate</p>
        </div>
        <div className="text-center">
          <h3 className="text-3xl font-bold text-green-600">15</h3>
          <p className="text-gray-600">Collections</p>
        </div>
      </div>
      <div className="mt-10">
        <h3 className="text-xl font-bold mb-4">My Waste Distribution</h3> {/* Larger font size */}
        <WasteDistributionChart />
      </div>
    </div>
  );
};

export default MyStatsPage;
