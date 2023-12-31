import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import LandingPage from './screens/LandingPage';
import NavBar from './components/NavBar';
import LoadManagement from './screens/LoadManagement';
import ProfileManagement from "./screens/ProfileManagement";
import LoginPage from './screens/LoginPage';
import AccountCreationPage from './screens/AccountCreationPage';
import UserAuthPage from './screens/UserAuthPage';
import AuthSuccessPage from './screens/AuthSuccessPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element={<LandingPage />} />
        <Route path = "/Nav" element={<NavBar />} />
        <Route path = "/LoadManagement" element={<LoadManagement />} />
        <Route path = "/Profile" element={<ProfileManagement />} />
        <Route path="/AccountCreate" element={<AccountCreationPage />} />
        <Route path="/Login" element={<LoginPage/>}/>
        <Route path="/UserAuth" element={<UserAuthPage/>}/>
        <Route path="/AuthSuccess" element={<AuthSuccessPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
