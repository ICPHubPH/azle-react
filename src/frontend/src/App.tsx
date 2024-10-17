import Home from "./pages/Home/Home";
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
import FlashcardDecks from "./pages/Decks/FlashcardDecks";
import { Navigation } from "./Navigation";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<Root />}
      >
        <Route
          index
          element={<FlashcardDecks />}
        />
        <Route
          path="create"
          element={<Create />}
        />
        <Route
          path="login"
          element={<Login />}
        />
        <Route
          path="signup"
          element={<Signup />}
        />
        <Route
          path="home"
          element={<Home />}
        />
        <Route
          path="decks"
          element={<FlashcardDecks />}
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
