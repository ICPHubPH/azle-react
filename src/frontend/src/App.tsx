import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/landing';
import Profile from './pages/student/profile';
import { ThemeProvider } from "@/components/theme-provider"


function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
    </ThemeProvider>

  );
}

export default App;
