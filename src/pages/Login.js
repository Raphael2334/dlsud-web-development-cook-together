
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const sheetdbUrl = "https://sheetdb.io/api/v1/f5xhho4oknm2x";

  useEffect(() => {
    if (sessionStorage.getItem("loggedInUser")) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${sheetdbUrl}/search?username=${username}&password=${password}`);
      const data = await response.json();
      if (data.length > 0) {
        sessionStorage.setItem("loggedInUser", username);
        navigate("/dashboard");
      } else {
        setMessage("Invalid credentials.");
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Username" 
          required 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          className="form-control mb-3"
        />
        <input 
          type="password" 
          placeholder="Password" 
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control mb-3"
        />
        <button type="submit" className="btn btn-primary">Login</button><br/>
      
      </form>
      {message && <div className="alert alert-danger mt-3">{message}</div>}
    </div>
  );
};

export default Login;
