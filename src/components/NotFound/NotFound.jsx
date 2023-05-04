import { Container, Image } from "react-bootstrap";


const NotFound = () => {
    return (
        <Container className="d-flex flex-column align-items-center justify-content-center" style={{ height: '100vh' }}>
      <Image style={{width: '33rem'}} src="https://images.unsplash.com/photo-1594322436404-5a0526db4d13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1129&q=80" alt="" fluid />
      <h3 className="mt-3">PAGE NOT FOUND</h3>
    </Container>
    );
};

export default NotFound;