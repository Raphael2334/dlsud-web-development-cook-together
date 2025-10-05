import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import FooterComponent from './components/FooterComponent';
import LandingPage from './pages/LandingPage';
import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';
import RecipesPage from './pages/RecipesPage';

function App() {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/landing' element={<LandingPage />} />
        <Route path='/registration' element={<RegistrationPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/home-recipes' element={<RecipesPage />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
      <FooterComponent />
    </Router>
  );
}

export default App;