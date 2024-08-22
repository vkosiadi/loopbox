import React from 'react';

const MapSection = () => {
  return (
    <div className="mb-5 mt-5">
      <div className="relative w-[600px] mx-auto">
        {/* Use a static image as a placeholder and link to Google Maps */}
        <a
          href="https://www.google.com/maps/@37.7897442,-122.399814,17z?entry=ttu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://via.placeholder.com/300x150?text=View+Map"
            alt="Static Map"
            className="w-full rounded-lg"
          />
        </a>
        <div className="absolute top-2.5 left-2.5 flex items-center bg-white bg-opacity-90 p-2.5 rounded-lg">
          <img src="https://via.placeholder.com/50" alt="Avatar" className="w-10 h-10 rounded-full mr-2.5" />
          <div className="flex flex-col">
            <h3 className="text-base m-0">Sanlitun SOHO, A-2203</h3>
            <p className="text-xs m-0">朝阳区工人体育场北路8号</p>
          </div>
        </div>
      </div>
      <button className="block w-full py-3.5 mt-2.5 bg-green-800 text-white rounded-lg text-lg cursor-pointer">
        Collect My Recycling
      </button>
    </div>
  );
};

export default MapSection;
