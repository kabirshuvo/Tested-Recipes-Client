import { createBrowserRouter } from "react-router-dom";
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
         
      ]
  }
])

export default router;