import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Log/Login";
import Registration from "../components/Log/Registration";
import NotFound from "../components/NotFound/NotFound";
import App from "../layout/App";
import Home from "../pages/Home/Home/Home";



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
          path:'login',
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