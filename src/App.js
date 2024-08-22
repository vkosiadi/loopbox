import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EcoLeaderboardPage from './pages/EcoLeaderboardPage';
import MyStatsPage from './pages/MyStatsPage';

function App() {
  return (
    <Router>
      <div style={styles.container}>
        <nav style={styles.nav}>
          <ul style={styles.navList}>
            <li style={styles.navItem}>
              <Link to="/" style={styles.navLink}>Home</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/eco-leaderboard" style={styles.navLink}>Eco Leaderboard</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/my-stats" style={styles.navLink}>My Stats</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/eco-leaderboard" element={<EcoLeaderboardPage />} />
          <Route path="/my-stats" element={<MyStatsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

const styles = {
  container: {
    padding: '20px',
  },
  nav: {
    position: 'fixed',
    top: '10px',
    right: '10px',
    backgroundColor: '#fff',
    padding: '10px',
    borderRadius: '5px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
  },
  navList: {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
    display: 'flex', // This makes the list items horizontal
    gap: '15px', // Adds space between the items
  },
  navItem: {
    margin: 0,
  },
  navLink: {
    textDecoration: 'none',
    color: '#2c662d',
    fontWeight: 'bold',
  },
};

export default App;
