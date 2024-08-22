import React from 'react';
import { FaTint, FaOilCan, FaBolt, FaLandmark } from 'react-icons/fa';

const ImpactScreen = () => {
  return (
    <div className="p-5 bg-gray-100 rounded-lg">
      <h2 className="text-lg mb-5 text-gray-800">My Impact</h2>
      <div className="bg-gray-200 p-5 rounded-lg">
        <div className="flex items-center mb-5">
          <FaTint className="text-2xl text-green-700 mr-2.5" />
          <div className="flex flex-col">
            <h3 className="text-2xl text-green-700 mb-1.5">320L</h3>
            <p>Water from paper & cardboard recycling</p>
          </div>
        </div>
        <div className="flex items-center mb-5">
          <FaOilCan className="text-2xl text-green-700 mr-2.5" />
          <div className="flex flex-col">
            <h3 className="text-2xl text-green-700 mb-1.5">12</h3>
            <p>Barrels of Oil from plastic recycling</p>
          </div>
        </div>
        <div className="flex items-center mb-5">
          <FaBolt className="text-2xl text-green-700 mr-2.5" />
          <div className="flex flex-col">
            <h3 className="text-2xl text-green-700 mb-1.5">790kW</h3>
            <p>Energy from all recycling</p>
          </div>
        </div>
        <div className="flex items-center mb-5">
          <FaLandmark className="text-2xl text-green-700 mr-2.5" />
          <div className="flex flex-col">
            <h3 className="text-2xl text-green-700 mb-1.5">5m³</h3>
            <p>Landfill space from all recycling</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactScreen;
