import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../styles/colors.css';

const sampleRecipes = [
  { id: 1, title: 'Spaghetti Bolognese', price: '25g', sold: '1.5k', rating: 4, reviews: 342, img: '/assets/images/placeholder.svg' },
  { id: 2, title: 'Vegan Salad', price: 'FREE', sold: '980', rating: 3, reviews: 210, img: '/assets/images/placeholder.svg' },
  { id: 3, title: 'Sushi Platter', price: '50g', sold: '2.3k', rating: 5, reviews: 540, img: '/assets/images/placeholder.svg' },
];

function Stars({ value = 0 }) {
  const full = '★'.repeat(Math.max(0, Math.floor(value)));
  const empty = '☆'.repeat(Math.max(0, 5 - Math.floor(value)));
  return <span className="text-warning">{full}{empty}</span>;
}

function BodyComponent() {
  return (
    <Container className="mt-4">
      <section className="col-12 col-md-9">
        <Row xs={1} sm={2} md={3} className="g-3">
          {sampleRecipes.map(r => (
            <Col key={r.id} className="col">
              <Card className="h-100 ct-card">
                <Card.Img variant="top" src={r.img} alt={r.title} className="card-img-top" />
                <Card.Body>
                  <Card.Title className="text-ct-ink">{r.title}</Card.Title>
                  <p className="card-text">
                    <span className="fw-bold">{r.price}</span> • <span className="text-ct-muted">{r.sold} sold</span>
                  </p>
                  <p className="card-text small">
                    <Stars value={r.rating} /> <span className="ms-2 text-ct-muted">{r.reviews}</span>
                  </p>
                  <Button className="btn-ct-primary btn-sm">Get</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="d-grid gap-2 col-6 mx-auto my-4">
          <Button className="btn-ct-outline">Load more</Button>
        </div>
      </section>
    </Container>
  );
}

export default BodyComponent;