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
import Deck from "./pages/Deck/Decks";
import { Navigation } from "./Navigation";
import Flashcard from "./pages/Flashcard/Flashcards";
import Profile from "./pages/Profile/Profile";
import Classes from "./pages/Classes/Classes";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<FrontPage />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="class" element={<Navigation><Classes /></Navigation>} />
        <Route path="create" element={<Navigation><Create /></Navigation>} />
        <Route path="deck" element={<Navigation><Deck /></Navigation>} />
        <Route path="flashcards" element={<Navigation><Flashcard /></Navigation>} />
        <Route path="profile" element={<Navigation><Profile /></Navigation>} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
