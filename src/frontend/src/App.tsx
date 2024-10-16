import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home/Home";
import { JSX } from "react/jsx-runtime";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Create from "./pages/Create/Create";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Root from "./Root";
import FrontPage from "./pages/Front/FrontPage";
import { Navigation } from "./Navigation";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<FrontPage />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="home" element={<Navigation><Home /></Navigation>} />
        <Route path="create" element={<Navigation><Create /></Navigation>} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
