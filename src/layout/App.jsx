import { Container, Row } from "react-bootstrap";
import NavBar from "../components/Navbar/Navbar";
import Footer from "../pages/Footer/Footer";
import Header from "../pages/Header/Header";
import PopularRecipes from "../pages/PopularRecipes/PopularRecipes";
import PopulerChefs from "../pages/PopulerChefs/PopulerChefs";

function App() {
  return (
    <>
      <NavBar></NavBar>

      <Container>
        <Row>
          <Header></Header>
        </Row>
        <Row>
          <PopulerChefs></PopulerChefs>
        </Row>
        <Row>
          <PopularRecipes></PopularRecipes>
        </Row>
      </Container>

      <Footer></Footer>
    </>
  );
}

export default App;
