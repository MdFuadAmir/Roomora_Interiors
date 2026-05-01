import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Services from "../Pages/Services/Services";
import Projects from "../Pages/Projects/Projects";
import Contact from "../Pages/Contact/Contact";
import ProjectDetails from "../Pages/Projects/ProjectDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "projects/:slug",
        element: <ProjectDetails />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
