import React, { useState } from 'react';
import { ModeToggle } from "../mode-toggle";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuLabel } from "@/components/ui/dropdown-menu";
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Sample user data (You can replace this with actual state or context data)
  const user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    role: 'Student',
    avatarUrl: 'https://github.com/shadcn.png',
  };

  const navItems = [
    { name: 'Scholarship', href: '#scholarship' },
    { name: 'Providers', href: '#providers' },
    { name: 'Terms of Use', href: '#terms' },
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
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:underline hover:text-blue-500 dark:hover:text-yellow-500 transition-colors duration-200"
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
          <h1 className="text-2xl font-bold text-blue-500 dark:text-yellow-500">ISKOLAR PH</h1>
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-4">
            <NavItems />
          </ul>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[240px] sm:w-[300px]">
            {/* User Info in Mobile Menu */}
            <div className="px-4 py-3 flex items-center gap-3 border-b mb-2">
              {/* User Avatar */}
              <Avatar className="w-12 h-12">
                <AvatarImage src={user.avatarUrl} />
                <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
              </Avatar>
              {/* User Details */}
              <div>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">{user.name}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{user.email}</p>
                <p className="text-xs text-gray-400 dark:text-gray-500">{user.role}</p>
              </div>
            </div>

            {/* Navigation Items */}
            <nav className="flex flex-col gap-4">
              <ul className="flex flex-col gap-2">
                <NavItems />
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
                onClick={() => {
                  console.log("User logged out");
                }}
              >
                Logout
              </Button>
            </div>
          </SheetContent>
        </Sheet>

        <div className="hidden md:flex items-center space-x-4">
          <ModeToggle />
          {/* User Avatar with Dropdown Menu for Desktop */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="relative cursor-pointer">
                <Avatar>
                  <AvatarImage src={user.avatarUrl} />
                  <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {/* Display User Information */}
              <div className="px-4 py-3 flex items-center gap-3">
                {/* User Avatar */}
                <Avatar className="w-12 h-12">
                  <AvatarImage src={user.avatarUrl} />
                  <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                {/* User Details */}
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">{user.name}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{user.email}</p>
                  <p className="text-xs text-gray-400 dark:text-gray-500">{user.role}</p>
                </div>
              </div>

              {/* Separator */}
              <DropdownMenuLabel className="border-t my-2" />

              {/* Menu Options */}
              <DropdownMenuItem onSelect={() => navigate('/profile')}>
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={() => {
                  console.log("User logged out");
                }}
              >
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
