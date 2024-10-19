import { ThemeProvider } from "@/components/theme-provider";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";

// Pages
import AuthPage from "./pages/auth";
import Home from "./pages/landing";
import NotFoundPage from "./pages/NotFoundPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsOfUse";

// User Pages
import User from "./pages/user";
import ProvidersFeed from "./pages/user/AllProvidersFeed";
import PostsFeed from "./pages/user/PostsFeed";
import Profile from "./pages/user/Profile";
import ProviderProfile from "./pages/user/ProviderProfile";

// Post Pages
import PostPage from "./pages/post";

// Admin Page
import VerifyAuth from "./components/auth/VerifyAuth";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRouteContext from "./context/ProtectedRouteContext";
import AdminPage from "./pages/admin/admin-page";
import { OtpVerification } from "./pages/auth/otp-verification";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AuthProvider>
        <Router>
          <Routes>
            {/* Landing and Auth */}
            <Route
              path="/"
              element={
                <ProtectedRouteContext allow={["*"]}>
                  <Home />
                </ProtectedRouteContext>
              }
            />
            <Route
              path="/auth"
              element={
                <ProtectedRouteContext allow={["*"]}>
                  <AuthPage />
                </ProtectedRouteContext>
              }
            />
            <Route
              path="/auth/verify"
              element={
                <ProtectedRouteContext allow={["*"]}>
                  <VerifyAuth />
                </ProtectedRouteContext>
              }
            />
            <Route
              path="/otp-verification"
              element={
                <ProtectedRouteContext allow={["*"]}>
                  <OtpVerification />
                </ProtectedRouteContext>
              }
            />

            {/* User Pages */}
            <Route
              path="/home"
              element={
                <ProtectedRouteContext allow={["*"]}>
                  <User />
                </ProtectedRouteContext>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRouteContext allow={["*"]}>
                  <Profile />
                </ProtectedRouteContext>
              }
            />
            <Route
              path="/provider-feed"
              element={
                <ProtectedRouteContext allow={["*"]}>
                  <ProvidersFeed />
                </ProtectedRouteContext>
              }
            />
            <Route
              path="/posts-feed"
              element={
                <ProtectedRouteContext allow={["*"]}>
                  <PostsFeed />
                </ProtectedRouteContext>
              }
            />
            <Route
              path="/provider-profile/:id"
              element={
                <ProtectedRouteContext allow={["*"]}>
                  <ProviderProfile />
                </ProtectedRouteContext>
              }
            />

            {/* Post Pages */}
            <Route
              path="/posts/:postId"
              element={
                <ProtectedRouteContext allow={["*"]}>
                  <PostPage />
                </ProtectedRouteContext>
              }
            />

            {/* Admin Page */}
            <Route
              path="/admin"
              element={
                <ProtectedRouteContext allow={["*"]}>
                  <AdminPage />
                </ProtectedRouteContext>
              }
            />

            {/* Legal Pages */}
            <Route
              path="/privacy-policy"
              element={
                <ProtectedRouteContext allow={["*"]}>
                  <PrivacyPolicy />
                </ProtectedRouteContext>
              }
            />
            <Route
              path="/terms-and-conditions"
              element={
                <ProtectedRouteContext allow={["*"]}>
                  <TermsAndConditions />
                </ProtectedRouteContext>
              }
            />

            {/* 404 Not Found */}
            <Route
              path="*"
              element={
                <ProtectedRouteContext allow={["*"]}>
                  <NotFoundPage />
                </ProtectedRouteContext>
              }
            />
          </Routes>
        </Router>
        <Toaster />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
