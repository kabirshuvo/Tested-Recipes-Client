import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Log/Login";
import Registration from "../components/Log/Registration";
import NotFound from "../components/NotFound/NotFound";
import RecipeCard from "../components/RecipeCard/RecipeCard";
import App from "../layout/App";
import Blog from "../pages/Blog/Blog";
import Chefs from "../pages/Chefs/Chefs";
import Contacts from "../pages/Contacts/Contacts";
import DownLoad from "../pages/Download/DownLoad";
import Foods from "../pages/Foods/Foods";
import Home from "../pages/Home/Home/Home";
import Recipes from "../pages/Recipes/Recipes";



const router = createBrowserRouter([
  {
      path: '/',
      element: <App></App>,
      errorElement: <NotFound></NotFound>,
      children: [
          {
              path: '/',
              element: <Home></Home>
          },
          {
            path: '/recipe/:id',
            element: <RecipeCard></RecipeCard>
          },
          {
            path: '/blog',
            element: <Blog></Blog>
          },
          {
            path: '/chefs',
            element: <Chefs></Chefs>
          },
          {
            path: '/foods',
            element: <Foods></Foods>
          },
          {
            path: '/recipes',
            element: <Recipes></Recipes>
          },
          {
            path: '/download',
            element: <DownLoad></DownLoad>
          },
          {
            path: '/contacts',
            element: <Contacts></Contacts>
          },
          
         {
          path:'/login',
          element:<Login></Login>
         },
         {
          path:'/registration',
          element:<Registration></Registration>
         }
      ]
  }
])

export default router;