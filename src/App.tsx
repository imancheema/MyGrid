import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import LandingPage from './screens/LandingPage';
import NavBar from './components/NavBar';
import LoadManagement from './screens/LoadManagement';
import ProfileManagement from "./screens/ProfileManagement";
import EnergyAnalysis from './screens/EnergyAnalysis';
import Schedule from './screens/Schedule';

function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element={<LandingPage />} />
        <Route path = "/Nav" element={<NavBar />} />
        <Route path = "/LoadManagement" element={<LoadManagement />} />
        <Route path = "/Profile" element={<ProfileManagement />} />
        <Route path = "/EnergyAnalysis" element={<EnergyAnalysis />} />
        <Route path = "/Schedule" element={<Schedule />} />
      </Routes>
    </Router>
  );
}

export default App;
