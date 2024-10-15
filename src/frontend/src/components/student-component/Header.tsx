import React, { useState, useEffect } from 'react';
import { ModeToggle } from "../mode-toggle";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useNavigate, useLocation } from 'react-router-dom';
import UserDropdown from '../dropdowns/UserDropdown';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const navigate = useNavigate();
  const location = useLocation(); // Use location to detect current path

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Sample user data (You can replace this with actual state or context data)
  const user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    role: 'Student', // Change role to 'Provider' or 'Student'
    avatarUrl: 'https://github.com/shadcn.png',
  };

  const handleLogoClick = () => {
    if (user.role === 'Student') {
      navigate('/student');
    } else if (user.role === 'Provider') {
      navigate('/provider');
    } else {
      navigate('/'); // Default or fallback route (e.g., index page)
    }
  };

  const navItems = [
    { name: 'Home', path: '/student' }, // Add Home link here
    { name: 'Scholarship', path: '/scholarship-feed' }, 
    { name: 'Providers', path: '/provider-feed' }, 
    { name: 'Terms of Use', path: '/terms-and-conditions' }, 
  ];

  const NavItems = () => (
    <>
      {navItems.map((item) => (
        <li key={item.name}>
          <Button
            variant="ghost"
            asChild
            className="w-full justify-start hover:bg-transparent hover:text-blue-500 transition-colors duration-200 dark:hover:text-yellow-500"
          >
            <a
              onClick={() => {
                if (location.pathname === item.path) {
                  // If the user is on the same page, scroll to the top smoothly
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                  setIsMobileMenuOpen(false);
                  navigate(item.path); // Navigate to the correct path
                }
              }}
              className="hover:underline hover:text-blue-500 dark:hover:text-yellow-500 transition-colors duration-200 cursor-pointer"
            >
              {item.name}
            </a>
          </Button>
        </li>
      ))}
    </>
  );

  return (
    <header className="border-b z-[1000] sticky top-0 backdrop-blur-md">
      <div className="container mx-auto flex justify-between items-center h-16 px-4">
        <div className="flex items-center space-x-2">
          <h1
            className="text-2xl font-bold bg-gradient-to-r from-[#0038a9] via-[#ce1127] to-[#f5ce31] bg-clip-text text-transparent cursor-pointer"
            onClick={handleLogoClick}
          >
            ConnectED
          </h1>
        </div>

        {/* Desktop Menu */}
        {!isMobile && (
          <ul className="hidden md:flex space-x-4">
            <NavItems />
          </ul>
        )}

        {/* Mobile Menu */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>

          {/* Fixed z-index for mobile menu */}
          <SheetContent side="right" className="w-[250px] sm:w-[300px] z-[1100]">
            {/* User Info in Mobile Menu */}
            <div className="px-4 py-3 flex items-center gap-3 border-b mb-2">
              <Avatar className="w-12 h-12">
                <AvatarImage src={user.avatarUrl} />
                <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">{user.name}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{user.email}</p>
                <p className="text-xs text-gray-400 dark:text-gray-500">{user.role}</p>
              </div>
            </div>

            {/* Mobile Navigation Items */}
            <nav className="flex flex-col gap-4">
              <ul className="flex flex-col gap-2">
                {isMobile && <NavItems />}
              </ul>
            </nav>

            {/* Additional Options */}
            <div className="border-t mt-4 pt-4">
              <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={() => navigate('/profile')}
              >
                Profile
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start mt-2"
                onClick={() => navigate('/logout')}
              >
                Logout
              </Button>
            </div>
          </SheetContent>
        </Sheet>

        {/* Desktop User Dropdown */}
        {!isMobile && (
          <div className="hidden md:flex items-center space-x-4">
            <ModeToggle />
            <UserDropdown user={user} />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
