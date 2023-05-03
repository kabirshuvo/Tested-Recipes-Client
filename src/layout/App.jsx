import { useContext } from "react";
import { Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../pages/Footer/Footer";
import LoginWith from "../pages/loginWith/LoginWith";
import { AuthContext } from "../providers/AuthProvider";



function App() {

  const {user} = useContext(AuthContext)
  return (
    <>
    {user}
     <Header></Header>
     

      <Container>
        <Row>
        <LoginWith></LoginWith>
        </Row>
      
        
        <Row>
        <Outlet></Outlet>
        </Row>


      </Container>

      <Footer></Footer>
    </>
  );
}

export default App;
