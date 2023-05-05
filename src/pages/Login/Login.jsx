import { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import { AuthContext } from "../../providers/AuthProvider";
const Login = () => {
  const { signIn, signInWithGoogle, signInWithGithub } = useContext(AuthContext);
 
  const navigate = useNavigate();
  const location = useLocation();
 
useTitle('login')


  const from = location.state?.from?.pathname || "/";
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle()
    .then(result => {
      const loggedUser = result.user;
      console.log(loggedUser);
      navigate(from, { replace: true })
    })
    .catch( error => {
      console.log(error)
    })
  }

  const handleGithubSignIn = () => {
    signInWithGithub()
    .then(result => {
      const loggedUser = result.user;
      console.log(loggedUser);
      navigate(from, { replace: true })
      
    })
    .catch(error => {
      console.log(error)
    })
  }
  return (
    <>
      <Container style={{ height: "76vh" }} className="w-25 mx-auto">
        <h3>Please Login</h3>
        <Form onSubmit={handleLogin}>
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
          <div className="p-2">
            <Button onClick={handleGoogleSignIn} variant="outline-success" className="mx-2">
              <i className="fab fa-google"></i>Google SignIn
            </Button>
            <Button onClick={handleGithubSignIn} variant="outline-success" className="mx-2">
              <i className="fab fa-github"></i>GitHub SignIn
            </Button>
          </div>
          <br />
          <Form.Text className="text-secondary">
            New User Registration <Link to="/register">Register</Link>
          </Form.Text>
          <Form.Text className="text-success"></Form.Text>
          <Form.Text className="text-danger"></Form.Text>
        </Form>
      </Container>
    </>
  );
};

export default Login;
