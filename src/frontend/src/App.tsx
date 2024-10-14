// src/frontend/src/App.tsx
import { ThemeProvider } from "@/components/theme-provider";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/landing";
import StudentPage from './pages/student';
import Profile from "./pages/student/profile";        
import AuthPage from './auth';    
import ProviderPage from './pages/provider';
import ScholarshipFeed from './pages/feeds/AllScholarshipPostsfeed';
import ProvidersFeed from './pages/feeds/AllProvidersFeed';
import ProviderProfile from './pages/provider/ProviderProfile';
import PrivacyPolicy from './pages/PrivacyPolicy';
import PostPage from "./pages/post";
import { Toaster } from "./components/ui/sonner";
import TermsAndConditions from "./pages/TermsOfUse";

function App() {
return (  
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/student" element={<StudentPage />} />
          <Route path='/provider' element={<ProviderPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path='/scholarship-feed' element={<ScholarshipFeed/>}/>
          <Route path='/provider-feed' element={<ProvidersFeed/>} />
          <Route path="/provider-profile/:id" element={<ProviderProfile />} /> 
          <Route path="/posts/:postId" element={<PostPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
          <Route path='/terms-and-conditions' element={<TermsAndConditions/>} />
        </Routes>
      </Router>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
