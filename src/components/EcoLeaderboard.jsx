import React from 'react';
import Avatar1 from '../assets/avatar1.avif';  // Import the image
import Avatar2 from '../assets/avatar2.avif';  // Import the image
import Avatar3 from '../assets/avatar3.avif';  // Import the image

const EcoLeaderboard = () => {  
  return (
    <div className="p-5 bg-gray-100">
      <div className="bg-white p-5 rounded-lg">
        <h3 className="text-lg mb-4">Eco Leaderboard</h3>
        <div className="flex justify-around mb-4">
          <img src={Avatar1} alt="Avatar 1" className="w-12 h-12 rounded-full object-cover" /> 
          <img src={Avatar2} alt="Avatar 2" className="w-12 h-12 rounded-full object-cover" /> 
          <img src={Avatar3} alt="Avatar 3" className="w-12 h-12 rounded-full object-cover" /> 
        </div>
        <button className="bg-gray-200 border-none py-2 px-4 rounded cursor-pointer">
          View Leaderboard &gt;
        </button>
      </div>
    </div>
  );
};

export default EcoLeaderboard;
