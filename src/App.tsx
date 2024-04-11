import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./screens/LandingPage";
import Dashboard from "./screens/Dashboard";
import NavBar from "./components/NavBar";
import LoadManagement from "./screens/LoadManagement";
import ProfileManagement from "./screens/ProfileManagement";
import EnergyAnalysis from "./screens/EnergyAnalysis";
import SchedulePage from "./screens/SchedulePage";
import LoginPage from "./screens/LoginPage";
import AccountCreationPage from "./screens/AccountCreationPage";
import UserAuthPage from "./screens/UserAuthPage";
import AuthSuccessPage from "./screens/AuthSuccessPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Nav" element={<NavBar />} />
        <Route path="/LoadManagement" element={<LoadManagement />} />
        <Route path="/Profile" element={<ProfileManagement />} />
        <Route path="/EnergyAnalysis" element={<EnergyAnalysis />} />
        <Route path="/Schedule" element={<SchedulePage />} />
        <Route path="/AccountCreate" element={<AccountCreationPage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/UserAuth" element={<UserAuthPage />} />
        <Route path="/AuthSuccess" element={<AuthSuccessPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/load-management" element={<LoadManagement />} />
        <Route path="/profile" element={<ProfileManagement />} />
      </Routes>
    </Router>
  );
}

export default App;
