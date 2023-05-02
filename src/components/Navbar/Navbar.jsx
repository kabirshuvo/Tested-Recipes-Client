import {
    Button,
    Container,
    Form,
    Nav,
    Navbar
} from "react-bootstrap";
import { FaBeer } from 'react-icons/fa';

const NavBar = () => {
  return (
    <>
      <Navbar className="container-lg" bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Tested Recipes</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link >Chefs</Nav.Link>
              <Nav.Link >Foods</Nav.Link>
              <Nav.Link >Recipes</Nav.Link>
              <Nav.Link >Download</Nav.Link>
              <Nav.Link >Contacts</Nav.Link>
              <Nav.Link >Blog</Nav.Link>
              
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            <>
            <FaBeer></FaBeer>
            <img src="" alt="userImage" />
            <Button>Login</Button>
            </>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
