import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./screens/LandingPage";
import Dashboard from "./screens/Dashboard";
import NavBar from "./components/NavBar";
import LoadManagement from "./screens/LoadManagement";
import ProfileManagement from "./screens/ProfileManagement";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/load-management" element={<LoadManagement />} />
        <Route path="/profile" element={<ProfileManagement />} />
        <Route
          path="/energy-analysis"
          element={
            <>
              <NavBar />
              <p> Not yet implemented</p>
            </>
          }
        />
        <Route
          path="/schedule"
          element={
            <>
              <NavBar />
              <p> Not yet implemented</p>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
