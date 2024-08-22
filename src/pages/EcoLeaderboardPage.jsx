import React from 'react';
import Avatar1 from '../assets/avatar1.avif';
import Avatar2 from '../assets/avatar2.avif';
import Avatar3 from '../assets/avatar3.avif';

const EcoLeaderboard = () => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg mt-14">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Eco Leaderboard</h3>
      </div>
      <div className="flex justify-around items-center mt-4">
        <img src={Avatar1} alt="Avatar 1" className="w-20 h-20 rounded-full object-cover" />
        <img src={Avatar2} alt="Avatar 2" className="w-20 h-20 rounded-full object-cover" />
        <img src={Avatar3} alt="Avatar 3" className="w-20 h-20 rounded-full object-cover" />
      </div>
      <div className="flex justify-end mt-6">
        <button className="text-gray-600 mr-16"> {/* Added mr-16 for right margin */}
          View Leaderboard &gt;
        </button>
      </div>
    </div>
  );
};

export default EcoLeaderboard;
