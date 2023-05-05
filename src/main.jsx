import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import AuthProvider from "./providers/AuthProvider";
import router from "./routs/Routs";

ReactDOM.createRoot(document.getElementById("root")).render(
  
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  
);
