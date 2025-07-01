import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/home";
import Movies from "./pages/movies";
import TiviShow from "./pages/tvShow";
import Register from "./pages/register";
import Login from "./pages/login";
import MyList from "./pages/myList";
import AuthLayout from "./AuthLayout";
import Profile from "./pages/profile";

//api

function TodoApp() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/movies",
          element: <Movies />,
        },
        {
          path: "/tvshow",
          element: <TiviShow />,
        },
        {
          path: "/mylist",
          element: <MyList />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/",
      element: <AuthLayout />,
      children: [
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default TodoApp;
