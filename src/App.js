import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarComponent from './components/Navbar';
import HeroComponent from './components/Hero';
import FooterComponent from './components/Footer';
import LandingPage from './pages/Landing';
import RegistrationPage from './pages/Registration';
import LoginPage from './pages/Login';
import RecipesPage from '.pages/Recipes';

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