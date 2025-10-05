import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AsideComponent from '../components/AsideComponent';
import BodyComponent from '../components/BodyComponent';
import '../styles/colors.css';

const KitchensPage = () => {
  return (
    <main className="my-4">
      <Container fluid>
        <Row className="g-4">
          <Col xs={12} md={3}>
            <AsideComponent activeKey="/KitchensPage" />
          </Col>
          <Col xs={12} md={9} className="app-main">
            <h2>Kitchens Page</h2>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default KitchensPage;
