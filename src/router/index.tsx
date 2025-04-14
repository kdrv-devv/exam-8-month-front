import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Dynamik from "../pages/dynamik";
import Seans from "../pages/seans";
import SoonMoviePage from "../pages/soonmovie";
import AboutCinema from "../pages/aboutcinema";

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
  {
    path:"/soonmovie",
    element:<SoonMoviePage/>
  },
  {
    path:"/aboutcinema",
    element:<AboutCinema/>
  }
]);
