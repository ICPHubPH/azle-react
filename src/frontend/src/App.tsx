// src/frontend/src/App.tsx
import { ThemeProvider } from "@/components/theme-provider";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AuthPage from "./auth";
import { Toaster } from "./components/ui/sonner";
import PostFeed from "./pages/feeds/feeds";
import Home from "./pages/landing";
import PostPage from "./pages/post";
import ProviderPage from "./pages/provider";
import StudentPage from "./pages/student";
import Profile from "./pages/student/profile";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/student" element={<StudentPage />} />
          <Route path="/provider" element={<ProviderPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/feed" element={<PostFeed />} />
          <Route path="/posts/:postId" element={<PostPage />} />
        </Routes>
      </Router>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
