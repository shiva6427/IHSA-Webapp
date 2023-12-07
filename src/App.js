import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RandomizePage from './RandomizePage';
import ManageHorsesPage from './ManageHorsesPage';
import ManageRidersPage from './ManageRidersPage';
import NavBar from './NavBar';
import './App.css';
import RandomizedResultsPage from './RandomizedResultsPage';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/manage-horses" element={<ManageHorsesPage />} />
          <Route path="/manage-riders" element={<ManageRidersPage />} />
          <Route path="/" element={<RandomizePage />} />
          <Route path="/results" element={<RandomizedResultsPage  />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
