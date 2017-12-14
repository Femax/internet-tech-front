import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../css/Portfolio.css';

class Portfolio extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs="3">.col-3</Col>
          <Col xs="4">.col-3</Col>
          <Col xs="5" >.col-3</Col>
        </Row>
      </Container>
    );
  }
}

export default Portfolio;
