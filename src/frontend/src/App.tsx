// src/frontend/src/App.tsx
import { ThemeProvider } from "@/components/theme-provider";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AuthPage from "./auth";
import { Toaster } from "./components/ui/sonner";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ProvidersFeed from "./pages/feeds/AllProvidersFeed";
import ScholarshipFeed from "./pages/feeds/AllScholarshipPostsfeed";
import Home from "./pages/landing";
import PostPage from "./pages/post";
import ProviderPage from "./pages/provider";
import ProviderProfile from "./pages/provider/ProviderProfile";
import StudentPage from "./pages/student";
import Profile from "./pages/student/profile";
import TermsAndConditions from "./pages/TermsOfUse";
import AdminPage from "./pages/admin/admin-page";


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
          <Route path='/scholarship-feed' element={<ScholarshipFeed/>}/>
          <Route path='/provider-feed' element={<ProvidersFeed/>} />
          <Route path="/provider-profile/:id" element={<ProviderProfile />} /> 
          <Route path="/scholarship-feed" element={<ScholarshipFeed />} />
          <Route path="/provider-feed" element={<ProvidersFeed />} />
          <Route path="/provider-profile/:id" element={<ProviderProfile />} />
          <Route path="/posts/:postId" element={<PostPage />} />
          <Route path="/admin" element={<AdminPage/>} />
          <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
          <Route path='/terms-and-conditions' element={<TermsAndConditions/>} />

        </Routes>
      </Router>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
