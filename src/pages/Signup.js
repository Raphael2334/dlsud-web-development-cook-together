import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';

const Signup = () => {
  const [regUsername, setRegUsername] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const sheetdbUrl = "https://sheetdb.io/api/v1/f5xhho4okmn2x";

  const handleRegister = async (e) => {
    e.preventDefault();

    if (regPassword.length < 6) {
      setMessage("Password must be at least 6 characters.");
      return;
    }

    try {
      const response = await fetch(sheetdbUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: [{ username: regUsername, password: regPassword }] })
      });

      if (response.ok) {
        setMessage("Registered successfully!");
        setTimeout(() => {
          navigate("/login");
        }, 1500);
        setRegUsername('');
        setRegPassword('');
      } else {
        setMessage("Registration failed.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Something went wrong.");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Username"
          required
          value={regUsername}
          onChange={(e) => setRegUsername(e.target.value)}
          className="form-control mb-3"
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={regPassword}
          onChange={(e) => setRegPassword(e.target.value)}
          className="form-control mb-3"
        />
        <button type="submit" className="btn btn-success">Register</button><br /><br />
       
      </form>
      {message && <div className="alert alert-info mt-3">{message}</div>}
    </div>
  );
};

export default Signup;