import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar as NavbarComponent } from './components/Navbar';
import { Hero as HeroComponent } from './components/Hero';
import { Footer as FooterComponent } from './components/Footer';
import Landing from './pages/Landing';
import Registration from './pages/Registration';
import Login from './pages/Login';
import Recipes from '.pages/Recipes';

function App() {
  return (
    <Router>
      <NavbarComponent />
      <HeroComponent />
      <Routes>
        <Route path='/landing' element={Landing} />
        <Route path='/registration' element={Registration} />
        <Route path='/login' element={Login} />
        <Route path='/home-recipes' element={Recipes} />
      </Routes>
      <FooterComponent />
    </Router>
  );
}

export default App;