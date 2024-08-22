import React from 'react';
import WasteDistributionChart from '../components/WasteDistributionChart';
import ImpactScreen from '../components/ImpactScreen';
import Avatar3 from '../assets/avatar3.avif';

const MyStatsPage = () => {
  return (
    <div className="p-5 bg-gray-50 rounded-lg mt-14"> {/* Add margin-top for spacing */}
      <div className="flex items-center mb-6"> {/* Avatar and Profile Info Section */}
        <img src={Avatar3} alt="Avatar" className="w-20 h-20 rounded-full object-cover" /> {/* Profile picture */}
        <div className="ml-4">
          <h2 className="text-xl font-bold">Valerie</h2> {/* Name */}
          <p className="text-gray-600">Offsetter Trendsetter</p> {/* Title */}
        </div>
      </div>

      <div>
        <WasteDistributionChart />
        <ImpactScreen />
      </div>
    </div>
  );
};

export default MyStatsPage;
