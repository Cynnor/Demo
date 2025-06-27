import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./layout";
import About from "./pages/about";
import Home from "./pages/home";
import Movies from "./pages/movies";
import TiviShow from "./pages/tvShow";



//api

function TodoApp() {
  const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/movies",
        element: <Movies/>
      },
      {
        path: "/tvshow",
        element: <TiviShow/>
      },
    ]
  },
]);

  return <RouterProvider router={router} />;
}

export default TodoApp

