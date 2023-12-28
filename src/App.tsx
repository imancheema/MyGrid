import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import LandingPage from './screens/LandingPage';
import Dashboard from './screens/Dashboard';
import NavBar from './components/NavBar';
import LoadManagement from './screens/LoadManagement';
import ProfileManagement from "./screens/ProfileManagement";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dash" element={<Dashboard />} />
        <Route path = "/Nav" element={<NavBar />} />
        <Route path = "/LoadManagement" element={<LoadManagement />} />
        <Route path = "/Profile" element={<ProfileManagement />} />
      </Routes>
    </Router>
  );
}

export default App;
