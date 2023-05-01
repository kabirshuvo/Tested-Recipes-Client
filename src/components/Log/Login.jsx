
import { Button, Container } from "react-bootstrap";
import { Form, Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Container className="w-25 mx-auto">
        <h3>Please Login</h3>
        <Form 
        // onSubmit={handleLogin}
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Login
          </Button>
          <br />
          <Form.Text className="text-secondary">
            Dont Have an Account? <Link to="/register">Register</Link>
          </Form.Text>
          <Form.Text className="text-success"></Form.Text>
          <Form.Text className="text-danger"></Form.Text>
        </Form>
      </Container>
    </>
  );
};

export default Login;
