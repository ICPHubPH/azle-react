// src/frontend/src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/landing';
import StudentPage from './pages/student';
import { ThemeProvider } from "@/components/theme-provider";
import AuthPage from './auth';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/student" element={<StudentPage />} /> {/* Add this line */}
          <Route path="/auth" element={<AuthPage />} /> {/* Add this line */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
