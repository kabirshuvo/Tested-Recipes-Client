import {
  Button,
  Container,
  Form,
  Nav,
  Navbar
} from "react-bootstrap";
import { FaBeer } from 'react-icons/fa';
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Navbar className="container-lg" bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand><Link style={{textDecoration: 'none', color:'rebeccapurple', padding: '1rem', fontSize: '2rem'}} to={'/'}>Tested Recipes</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link style={{textDecoration: 'none', color:'rebeccapurple', padding: '.7rem'}} to={'/chefs'}>Chefs</Link>
              <Link style={{textDecoration: 'none', color:'rebeccapurple', padding: '.7rem'}}  to={'/foods'}>Foods</Link>
              <Link style={{textDecoration: 'none', color:'rebeccapurple', padding: '.7rem'}} to={'/recipes'}>Recipes</Link>
              <Link style={{textDecoration: 'none', color:'rebeccapurple', padding: '.7rem'}} to={'/download'}>Download</Link>
              <Link style={{textDecoration: 'none', color:'rebeccapurple', padding: '.7rem'}} to={'/contacts'}>Contacts</Link>
              <Link style={{textDecoration: 'none', color:'rebeccapurple', padding: '.7rem'}} to={'/blog'}>Blog</Link>
              
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
