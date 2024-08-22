import React from 'react';
import MapSection from '../components/MapSection';  // Import the MapSection component
import TrendsetterScreen from '../components/TrendsetterScreen';

function HomePage() {
  return (
    <div>
      <MapSection />  {/* Add the MapSection component here */}
      <TrendsetterScreen />
    </div>
  );
}

export default HomePage;
