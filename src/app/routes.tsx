import { createBrowserRouter } from "react-router";
import Root from "./components/Root";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import ProfessionalProfile from "./pages/ProfessionalProfile";
import ServiceRequest from "./pages/ServiceRequest";
import AuthPage from "./pages/AuthPage";
import ProfessionalDashboard from "./pages/ProfessionalDashboard";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "buscar", Component: SearchResults },
      { path: "profissional/:id", Component: ProfessionalProfile },
      { path: "solicitar/:id", Component: ServiceRequest },
      { path: "entrar", Component: AuthPage },
      { path: "dashboard", Component: ProfessionalDashboard },
      { path: "*", Component: NotFound },
    ],
  },
]);
