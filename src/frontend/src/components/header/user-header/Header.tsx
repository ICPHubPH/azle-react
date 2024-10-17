// src/components/header/user-header.tsx

import React, { useState, useEffect } from 'react';
import { ModeToggle } from "../../mode-toggle";
import UserDropdown from '../../dropdowns/UserDropdown';
import MobileMenu from './MobileMenu';
import NavItems from './NavItems';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    role: 'Student',
    avatarUrl: 'https://github.com/shadcn.png',
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLogoClick = () => {
    // Logic for logo click
  };

  return (
    <header className={`border-b ${isMobileMenuOpen ? '' : 'z-[10]'} sticky top-0 backdrop-blur-md`}>
      <div className="container mx-auto flex justify-between items-center h-16 px-4">
        <div className="flex items-center space-x-2">
          <h1
            className="text-2xl font-bold bg-gradient-to-r from-[#0038a9] via-[#ce1127] to-[#f5ce31] bg-clip-text text-transparent cursor-pointer"
            onClick={handleLogoClick}
          >
            ConnectED
          </h1>
        </div>

        <ul className={`md:flex hidden space-x-4`}>
          <NavItems
            onNavigate={() => { }}
            isMobileMenuOpen={isMobileMenuOpen}
            closeMobileMenu={() => setIsMobileMenuOpen(false)}
          />
        </ul>

        <MobileMenu
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          user={user}
        />

        <div className="hidden md:flex items-center space-x-4">
          <ModeToggle />
          <UserDropdown user={user} />
        </div>
      </div>
    </header>
  );
};

export default Header;
