import React, { useState } from "react";
import { ModeToggle } from "../mode-toggle";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"; // Import the Dialog components

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false); // State for dialog

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Testimonies", href: "#testimonies" },
    { name: "Providers", href: "#providers" },
  ];

  const handleSignIn = (role: string) => {
    // Redirect logic based on the role selected
    if (role === "student") {
      // redirect to student route
      window.location.href = "/student";
    } else if (role === "provider") {
      // redirect to provider route
      window.location.href = "/provider";
    }
  };

  return (
    <header className="border-b z-50 sticky top-0 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center h-16">
          <div className="flex items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-[#0038a9] via-[#ce1127] to-[#f5ce31] bg-clip-text text-transparent">ConnectED</h1>
          </div>
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-4">
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
          </ul>

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
                </ul>
              </nav>
            </SheetContent>
          </Sheet>

          <div className="items-center space-x-4 hidden md:flex">
            <ModeToggle />
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="outline">Sign In</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogTitle>Select Your Role</DialogTitle>
                <DialogDescription>
                  Please choose if you are a Student or a Provider.
                </DialogDescription>
                <div className="flex flex-col space-y-4 mt-4">
                  <Button
                    variant="outline"
                    onClick={() => {
                      handleSignIn("student");
                      setIsDialogOpen(false);
                    }}
                  >
                    I am a Student
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => {
                      handleSignIn("provider");
                      setIsDialogOpen(false);
                    }}
                  >
                    I am a Provider
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
