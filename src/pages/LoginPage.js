import React, { useState } from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/colors.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: perform authentication here
    navigate('/recipes'); // navigate to /recipes after successful login
  };

  return (
    <Container className="my-5">
      <Card className="ct-card mx-auto" style={{ maxWidth: 480 }}>
        <Card.Body>
          <h3 className="text-ct-ink mb-2">Sign in</h3>
          <p className="text-ct-muted small mb-4">
            Welcome back — continue to Cook Together.
          </p>

          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="loginEmail" className="mb-3">
              <Form.Label className="text-ct-muted">Email</Form.Label>
              <Form.Control
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
              />
            </Form.Group>

            <Form.Group controlId="loginPassword" className="mb-3">
              <Form.Label className="text-ct-muted">Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Your password"
              />
            </Form.Group>

            <div className="d-flex justify-content-between align-items-center">
              <Button type="submit" className="btn-ct-primary">
                Login
              </Button>

              <Link to="/registration" className="text-ct-muted small">
                Create an account
              </Link>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default LoginPage;