import logo from './logo.svg';
import './App.css';
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div style={{ backgroundColor: "#eee", minHeight: "100vh" }}>
      <Navbar />
      <div className="container mt-5">
        <h1>Hello, Cook Together!</h1>
        <p>This is your React app running with Bootstrap.</p>
      </div>
    </div>
  );
}

export default App;
