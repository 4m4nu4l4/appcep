import { Col, Container, Row } from "react-bootstrap";

export default function Footer() {
  return (
    <Container>
      <Row>
        <Col>
          <div>
            <h4>Sobre a empresa</h4>
            <p>Av Visconde de Taunay 666666</p>
          </div>
        </Col>
        <Col>
          <div>
            <h4>Redes sociais</h4>
            <p>
              <a href="//facebook.com" target="_blank">
                Facebook
              </a>
            </p>
            <p>Instagram</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
