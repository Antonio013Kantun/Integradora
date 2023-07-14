import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Navbar from "../Components/Navbar";
import Blog from "../Pages/Blog";
import Nosotros from "../Pages/acercade";
import Login from "../Pages/auth/login";
import Comentarios from "../Pages/comentarios";
import Catalogo from "../Pages/catalogo";
import Register from "../Pages/auth/register";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Navbar/>,
    children: [
      {
        path: "/",
        element: <App/>,
      },
      {
        path: "/Nosotros",
        element: <Nosotros/>,
      },
      {
        path: "/Blog",
        element: <Blog/>,
      },
      {
        path: "/comentarios",
        element: <Comentarios/>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      
      {
        path: "/catalogo",
        element: <Catalogo />,
      }

    ],
 
    
  },
]);