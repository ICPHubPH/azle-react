// src/frontend/src/App.tsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/landing';
import Profile from './pages/student/profile';
import { ThemeProvider } from "@/components/theme-provider";
<<<<<<< HEAD
import AuthPage from './auth';
=======
import StudentPage from './pages/student';
>>>>>>> 87955119f939f7ba98ba44a008c3006ffd0c86df

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
<<<<<<< HEAD
          <Route path="/student" element={<StudentPage />} /> {/* Add this line */}
          <Route path="/auth" element={<AuthPage />} /> {/* Add this line */}
=======
          <Route path="/student" element={<StudentPage />} /> 
          <Route path="/profile" element={<Profile />} />
>>>>>>> 87955119f939f7ba98ba44a008c3006ffd0c86df
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
