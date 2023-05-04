import { Col, Container, Row } from "react-bootstrap";


const Footer = () => {
    return (
        <div className="mt-5 ">
        <footer className="footer bg-dark text-light py-5">
          <Container className="d-flex flex-column justify-content-center align-items-center">
            <Row>
              <Col>
                <h5>About Us</h5>
                <p>Please Subscribe for our next event</p>
              </Col>
              <Col>
                <h5>Contact Us</h5>
                <p>Email: info@example.com</p>
                <p>Phone: +1234567890</p>
              </Col>
              <Col>
                <h5>Follow Us</h5>
                <ul className="list-unstyled">
                  <li><a href="#">Facebook</a></li>
                  <li><a href="#">Twitter</a></li>
                  <li><a href="#">Instagram</a></li>
                </ul>
              </Col>
            </Row>
            <Row className="mt-auto">
              <Col>
                <p className="text-center">© 2023 Tested-Recipes. All rights reserved.</p>
              </Col>
            </Row>
          </Container>
        </footer>
      </div>
    );
};

export default Footer;