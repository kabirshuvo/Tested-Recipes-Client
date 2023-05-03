import { createBrowserRouter } from "react-router-dom";
import NotFound from "../components/NotFound/NotFound";
import App from "../layout/App";
import Blog from "../pages/Blog/Blog";
import CategorisedRecipes from "../pages/CategorisedRecipes/CategorisedRecipes";
import Chefs from "../pages/Chefs/Chefs";
import Contacts from "../pages/Contacts/Contacts";
import DownLoad from "../pages/Download/DownLoad";
import Foods from "../pages/Foods/Foods";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Recipes from "../pages/Recipes/Recipes";
import Register from "../pages/Register/Register";
import PrivateRoute from "./privateRoute";
import TermsNcons from "../components/termsNcons/termsNcons";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/chefs",
        element: <Chefs></Chefs>,
      },
      {
        path: "/foods",
        element: <Foods></Foods>,
      },
      {
        path: "/recipes",
        element: <Recipes></Recipes>,
      },
      {
        path: "/recipes/:id",
        element: <PrivateRoute><CategorisedRecipes></CategorisedRecipes></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/recipes/${params.id}`)
      },
      {
        path: "/download",
        element: <DownLoad></DownLoad>,
      },
      {
        path: "/contacts",
        element: <Contacts></Contacts>,
      },

      {
        path: "/login",
        element: <Login></Login>
        
      },
      {
        path: "/register",
        element: <Register></Register>
       
      },
      {
        path: 'terms',
        element: <TermsNcons></TermsNcons>
      }
    ],
  },
]);

export default router;
