import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../styles/colors.css';

const ChallengeItems = [
  { id: 1, title: 'Challenge Name', author: 'Mary', reward: '120', difficulty: 'Easy',   end: '06/12/25', tags: "tags", img: '/assets/images/placeholder.svg' },
  { id: 2, title: 'Challenge Name', author: 'Jane', reward: '120', difficulty: 'Medium', end: '09/21/25', tags: "tags", img: '/assets/images/placeholder.svg' },
  { id: 3, title: 'Challenge Name', author: 'John', reward: '120', difficulty: 'Hard',   end: '01/01/26', tags: "tags", img: '/assets/images/placeholder.svg' },
];

function Stars({ value = 0 }) {
  const full = '★'.repeat(Math.max(0, Math.floor(value)));
  const empty = '☆'.repeat(Math.max(0, 5 - Math.floor(value)));
  return <span className="text-warning">{full}{empty}</span>;
}

function ChallengeBody() {
  return (
    <Container className="mt-4">
      <section className="col-12 col-md-9">
        <Row xs={1} sm={2} md={3} className="g-3">
          {ChallengeItems.map(r => (
            <Col key={r.id} className="col">
              <Card className="h-100 ct-card">
                <Card.Img variant="top" src={r.img} alt={r.title} className="card-img-top" />
                <Card.Body>
                  <Card.Title className="text-ct-ink">{r.title}</Card.Title>
                  
                  <p className="card-text">
                    <span className="fw-bold">Created by:</span> <span className="text-ct-muted">{r.author}</span>
                  </p>

                  <p className="card-text">
                    <span className="fw-bold">Difficulty</span> <span className="text-ct-muted">{r.difficulty}</span>
                  </p>

                  <div className="border rounded p-3 my-3 bg-light d-flex flex-column align-items-center">
                  <p className="mb-1 fw-bold">Rewards</p>
                  <p className="mb-0">
                  <img src={r.img} style={{marginRight: "2px"}} /> <span className="text-ct-muted">{r.reward}</span>
                
                  <img src={r.img} style={{ marginLeft: "40px" }} /> <span className="text-ct-muted">{r.reward}</span>
                  </p>
                  </div>

                  <Button className="btn-ct-primary btn-sm">Join   </Button> Ends at:    <span className="text-ct-muted">{r.end}</span>
                  
                  <div className="border rounded p-3 my-3 bg-light d-flex flex-row align-items-center" style={{ marginLeft: "4px", marginRight: "4px", gap: "6px"  }}>
                  <Button className="btn btn-primary">tags</Button>
                  <Button className="btn btn-secondary">tags</Button>
                  <Button className="btn btn-success">tags</Button>
                  <Button className="btn btn-danger">tags</Button>
                  </div>


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

export default ChallengeBody;
