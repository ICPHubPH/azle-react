// src/frontend/src/components/header/user-header/Header.tsx

import React, { useState, useEffect } from 'react';
import { ModeToggle } from "../../mode-toggle";
import UserDropdown from '../../dropdowns/UserDropdown';
import MobileMenu from './MobileMenu';
import NavItems from './NavItems';
import { useAuth } from "@/hooks/use-auth"; // Import your auth hook or context
import { User } from "@/types/model"; // Import the User type

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const { data } = useAuth(); // Get user data from AuthContext
  const user = data as User; // Cast data to User type

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLogoClick = () => {
    // Logic for logo click (e.g., navigate to homepage)
  };

  return (
    <header className={`border-b ${isMobileMenuOpen ? '' : 'z-[10]'} sticky top-0 backdrop-blur-lg`}>
      <div className="container mx-auto flex justify-between items-center h-16 px-4">
        <div className="flex items-center space-x-2">
          <h1
            className="text-2xl font-bold bg-gradient-to-r from-[#0038a9] via-[#ce1127] to-[#f5ce31] bg-clip-text text-transparent cursor-pointer"
            onClick={handleLogoClick}
          >
            ConnectED
          </h1>
        </div>

        {/* Desktop Nav Items */}
        <ul className="md:flex hidden space-x-4">
          <NavItems
            onNavigate={() => { }}
            isMobileMenuOpen={isMobileMenuOpen}
            closeMobileMenu={() => setIsMobileMenuOpen(false)}
          />
        </ul>

        {/* Conditionally render MobileMenu based on screen size */}
        <MobileMenu
            isMobileMenuOpen={isMobileMenuOpen}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
            user={user} 
          />


        {/* Desktop Mode Toggle and User Dropdown */}
        <div className="hidden md:flex items-center space-x-4">
          <ModeToggle />
          <UserDropdown user={user} /> {/* Pass the user prop here */}
        </div>
      </div>
    </header>
  );
};

export default Header;
