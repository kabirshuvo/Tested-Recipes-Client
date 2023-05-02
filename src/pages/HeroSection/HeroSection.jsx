
import { Button, Col, Container, Row } from 'react-bootstrap';
import { FaBeer } from 'react-icons/fa';

const HeroSection = () => {
    return (
        <>
       <Container fluid style={{ padding: "50px 0" }}>
      <Row>
        <Col>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <h2 style={{ fontSize: "36px", marginBottom: "20px" }}>
                Our Recipes are Tested By Thousands of Celebrities
              </h2>
              <Button
                className="hero-button"
                style={{ fontSize: "20px", padding: "10px 30px" }}
              >
                Join the Tested Community <FaBeer />
              </Button>
            </div>
          </div>
        </Col>
        <Col>
          <div style={{ display: "flex", alignItems: "center", flexDirection:'column' }}>
            <img
              src="https://images.unsplash.com/photo-1606914501449-5a96b6ce24ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="HeroSection image"
              className="img-fluid"
              style={{ maxWidth: "100%", height: "auto" }}
            />
            
          </div>
        </Col>
      </Row>
      <Row>
        <Col style={{ display: "flex", alignItems: "center", flexDirection:'column' }}>
        <Button
              
              style={{
                fontSize: "20px",
                padding: "10px 30px",
                marginTop: "20px",
               
              }}
            >
              Best Recipes To Test <FaBeer />
            </Button>
        </Col>
      </Row>
    </Container>
        </>
    );
};

export default HeroSection;