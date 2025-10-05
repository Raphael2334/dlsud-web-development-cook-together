import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import FooterComponent from './components/FooterComponent';
import AsideComponent from './components/AsideComponent';

import LandingPage from './pages/LandingPage';
import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';

import RecipesPage from './pages/RecipesPage';
import Challenges from './pages/Challenges';
import KitchensPage from './pages/KitchensPage';
import Inventory from './pages/Inventory';

function App() {
  return (
    <Router>
      <NavbarComponent />
      <Routes>

        {/* homepage routes */}
        <Route path='/' element={<LandingPage />} />
        <Route path='/registration' element={<RegistrationPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/recipes' element={<RecipesPage />} />
        <Route path='*' element={<Navigate to='/' replace />} />

        
        {/* AsideComponent routes */}
        <Route path='/Discover' element={<Challenges/>} />
        <Route path='/Challenges' element={<Challenges/>} />
        <Route path='/KitchensPage' element={<KitchensPage />} />
        <Route path='/inventory' element={<Inventory/>} />

      </Routes>
      <FooterComponent />
    </Router>
  );
}

export default App;