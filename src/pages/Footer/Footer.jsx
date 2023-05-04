import { Col, Container, Row } from "react-bootstrap";


const Footer = () => {
    return (
        <div className="mt-5">
        <footer className="footer bg-dark text-light">
          <Container className="d-flex flex-column justify-content-center align-items-center">
            <Row>
              <Col>
                <h5>About Us</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec quam vitae nisi varius volutpat.</p>
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
                <p className="text-center">© 2023 Your Company. All rights reserved.</p>
              </Col>
            </Row>
          </Container>
        </footer>
      </div>
    );
};

export default Footer;