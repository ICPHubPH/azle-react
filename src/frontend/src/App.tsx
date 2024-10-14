// src/frontend/src/App.tsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/landing';
import Profile from './pages/student/profile';
import { ThemeProvider } from "@/components/theme-provider";
import AuthPage from './auth';
import StudentPage from './pages/student';
import ProviderPage from './pages/provider';
import PostFeed from './pages/feeds/AllScholarshipPostsfeed';

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
          <Route path='/feed' element={<PostFeed/>}/>
        </Routes> 
      </Router>
    </ThemeProvider>
  );
}

export default App;
