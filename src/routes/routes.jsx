import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Navbar from "../Components/Navbar";
import Blog from "../Pages/Blog";
import Nosotros from "../Pages/acercade";
import Login from "../Pages/Login";
import Comentarios from "../Pages/comentarios";
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
        path: "/Login",
        element: <Login/>,
      },
    ],
 
    
  },
]);