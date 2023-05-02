import { Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../pages/Footer/Footer";
import LoginWith from "../pages/loginWith/LoginWith";

function App() {
  return (
    <>
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
