import React, { useState } from 'react';
import { ModeToggle } from "../mode-toggle";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Scholarship', href: '#scholarship' },
    { name: 'Providers', href: '#providers' },
    { name: 'Terms of Use', href: '#terms' },
  ];

  const NavItems = () => (
    <>
      {navItems.map((item) => (
        <li key={item.name}>
          <Button variant="ghost" asChild className="w-full justify-start hover:bg-transparent hover:text-blue-500 transition-colors duration-200 dark:hover:text-yellow-500">
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
            <nav className="flex flex-col gap-4">
              <ul className="flex flex-col gap-2">
                <NavItems />
              </ul>
            </nav>
          </SheetContent>
        </Sheet>

        <div className="flex items-center space-x-4">
          <ModeToggle />
          {/* User Avatar */}
          <div className="relative">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
