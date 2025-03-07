import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Dynamik from "../pages/dynamik";
import Seans from "../pages/seans";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/movie/:id",
    element: <Dynamik />,
  },
  {
    path: "/seans",
    element: <Seans/>,
  },
]);
