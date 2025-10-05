import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import HeroComponent from './components/HeroComponent';
import FooterComponent from './components/FooterComponent';
import LandingPage from './pages/LandingPage';
import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';
import RecipesPage from '.pages/RecipesPage';

function App() {
  return (
    <Router>
      <NavbarComponent />
      <HeroComponent />
      <Routes>
        <Route path='/landing' element={LandingPage} />
        <Route path='/registration' element={RegistrationPage} />
        <Route path='/login' element={LoginPage} />
        <Route path='/home-recipes' element={RecipesPage} />
      </Routes>
      <FooterComponent />
    </Router>
  );
}

export default App;