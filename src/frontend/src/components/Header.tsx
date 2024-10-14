import React, { useState, useEffect } from 'react';
import { ModeToggle } from './mode-toggle';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useNavigate } from 'react-router-dom';
import UserDropdown from './dropdowns/UserDropdown';

interface HeaderProps {
  navItems: { name: string }[];
  user?: {
    name: string;
    email: string;
    role: string;
    avatarUrl: string;
  };
}

const Header: React.FC<HeaderProps> = ({ navItems, user }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const NavItems = () => (
    <>
      {navItems.map((item, index) => (
        <li key={index}>
          <Button
            variant="ghost"
            asChild
            className="w-full justify-start hover:bg-transparent hover:text-blue-500 transition-colors duration-200 dark:hover:text-yellow-500"
          >
            <a
              onClick={() => setIsMobileMenuOpen(false)}
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
    <header className="border-b z-50 sticky top-0 backdrop-blur-md">
      <div className="container mx-auto flex justify-between items-center h-16 px-4">
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-[#0038a9] via-[#ce1127] to-[#f5ce31] bg-clip-text text-transparent">ConnectED</h1>
          {!isMobile && (
            <ul className="hidden md:flex space-x-4">
              <NavItems />
            </ul>
          )}
        </div>

        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[250px] sm:w-[300px]">
            <div className="px-4 py-3 flex items-center gap-3 border-b mb-2">
              {user ? (
                <>
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={user.avatarUrl} />
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">{user.name}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{user.email}</p>
                    <p className="text-xs text-gray-400 dark:text-gray-500">{user.role}</p>
                  </div>
                </>
              ) : (
                <p className="text-sm font-semibold text-gray-900 dark:text-white">Guest</p>
              )}
            </div>

            <nav className="flex flex-col gap-4">
              <ul className="flex flex-col gap-2">
                {isMobile && <NavItems />}
              </ul>
            </nav>

            <div className="border-t mt-4 pt-4">
              {user ? (
                <>
                  <Button
                    variant="ghost"
                    className="w-full justify-start"
                    onClick={() => navigate('')}
                  >
                    Profile
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start mt-2"
                    onClick={() => navigate('') /* Implement logout logic */}
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={() => navigate('/login')}
                >
                  Login
                </Button>
              )}
            </div>
          </SheetContent>
        </Sheet>

        {!isMobile && (
          <div className="hidden md:flex items-center space-x-4">
            <ModeToggle />
            {user && <UserDropdown user={user} />}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
