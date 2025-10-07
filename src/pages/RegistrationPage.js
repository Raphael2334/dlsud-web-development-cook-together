import React, { useState } from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/colors.css';

export default function RegistrationPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '', age: 18, gender: 'non-binary', loginStreak: 0, level: 0, currentEXP: 0, currentLevelCap: 0,  goldCount: 0, gemCount: 0});

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: add registration API call/validation
    navigate('/login');
  };

  return (
    <Container className="my-5">
      <Card className="ct-card mx-auto" style={{ maxWidth: 560 }}>
        <Card.Body>
          <h3 className="text-ct-ink mb-2">Create your account</h3>
          <p className="text-ct-muted small mb-4">
            Join Cook Together — share recipes, form parties, create challenges and earn rewards.
          </p>

          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="regName" className="mb-3">
              <Form.Label className="text-ct-muted">Full name</Form.Label>
              <Form.Control
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Jane Doe"
              />
            </Form.Group>

            <Form.Group controlId="regEmail" className="mb-3">
              <Form.Label className="text-ct-muted">Email</Form.Label>
              <Form.Control
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
              />
            </Form.Group>

            <Form.Group controlId="regPassword" className="mb-3">
              <Form.Label className="text-ct-muted">Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Create a password"
              />
            </Form.Group>

            <Form.Group controlId="regConfirm" className="mb-4">
              <Form.Label className="text-ct-muted">Confirm password</Form.Label>
              <Form.Control
                name="confirm"
                type="password"
                value={form.confirm}
                onChange={handleChange}
                placeholder="Repeat password"
              />
            </Form.Group>

            <div className="d-flex justify-content-between align-items-center">
              <Button type="submit" className="btn-ct-primary">
                Register
              </Button>

              <Link to="/login" className="text-ct-muted small">
                Already registered? Log in
              </Link>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}