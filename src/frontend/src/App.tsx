import { ThemeProvider } from "@/components/theme-provider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";

// Pages
import Home from "./pages/landing";
import AuthPage from "./pages/auth";
import NotFoundPage from "./pages/NotFoundPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsOfUse";

// User Pages
import User from "./pages/user";
import Profile from "./pages/user/Profile";
import ProvidersFeed from "./pages/user/AllProvidersFeed";
import PostsFeed from "./pages/user/PostsFeed";
import ProviderProfile from "./pages/user/ProviderProfile";

// Post Pages
import PostPage from "./pages/post";

// Admin Page
import AdminPage from "./pages/admin/admin-page";
import VerifyAuth from "./components/auth/VerifyAuth";
import { OtpVerification } from "./pages/auth/otp-verification";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Routes>
          {/* Landing and Auth */}
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/auth/verify" element={<VerifyAuth />} />
          <Route path="/otp-verification" element={<OtpVerification/>} />



          {/* User Pages */}
          <Route path="/home" element={<User />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/provider-feed" element={<ProvidersFeed />} />
          <Route path="/posts-feed" element={<PostsFeed />} />
          <Route path="/provider-profile/:id" element={<ProviderProfile />} />
          
          {/* Post Pages */}
          <Route path="/posts/:postId" element={<PostPage />} />

          {/* Admin Page */}
          <Route path="/admin" element={<AdminPage />} />

          {/* Legal Pages */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />

          {/* 404 Not Found */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
