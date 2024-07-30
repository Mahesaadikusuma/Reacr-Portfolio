import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import About from "./pages/About.jsx";
import NusantaraTrip from "./pages/Projects/NusantaraTrip.jsx";
import JokeComponent from "./pages/joke.jsx";
import Furniluxe from "./pages/Projects/Furniluxe.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/projects",
    element: <Projects />,
  },

  {
    path: "/about",
    element: <About />,
  },

  {
    path: "/project/nusantara-trip",
    element: <NusantaraTrip />,
  },

  {
    path: "/project/furniluxe",
    element: <Furniluxe />,
  },

  {
    path: "/joke",
    element: <JokeComponent />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
