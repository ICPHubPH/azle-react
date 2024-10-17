// src/components/header/MobileMenu.tsx

import React from 'react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import NavItems from './NavItems';
import UserAvatar from './UserAvatar';
import { Separator } from '@/components/ui/separator';
import { ModeToggle } from "../../mode-toggle";
import { useNavigate } from 'react-router-dom';

interface MobileMenuProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
  user: {
    name: string;
    email: string;
    role: string;
    avatarUrl: string;
  };
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isMobileMenuOpen, setIsMobileMenuOpen, user }) => {
  const navigate = useNavigate();

  return (
    <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="outline" size="icon">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="w-[250px] z-[1200] md:hidden lg:hidden  ">
        <div className="py-8 flex items-center gap-3 border-b mb-2">
          <UserAvatar user={user} />
          <div className="flex justify-start flex-col w-full">
            <p className="text-sm font-semibold text-gray-900 dark:text-white">{user.name}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">{user.email}</p>
          </div>
        </div>

        <div className='flex flex-col'>
          <nav className="flex flex-col gap-4">
            <ul className="flex flex-col gap-1">
              <NavItems
                onNavigate={() => { }}
                isMobileMenuOpen={isMobileMenuOpen}
                closeMobileMenu={() => setIsMobileMenuOpen(false)}
              />
            </ul>
          </nav>
          <div className="pt-6">
            <Separator />
          </div>
          <div className="mt-2">
            <Button
              className="w-full justify-start hover:underline hover:text-blue-500 dark:hover:text-yellow-500 transition-colors duration-200 cursor-pointer"
              onClick={() => navigate('/profile')}
              variant={null}
            >
              Profile
            </Button>

            <Button
              className="w-full mt-2 justify-start hover:underline hover:text-blue-500 dark:hover:text-yellow-500 transition-colors duration-200 cursor-pointer"
              onClick={() => navigate('/logout')}
              variant={null}
            >
              Logout
            </Button>
          </div>
          <div className="pt-6">
            <Separator />
          </div>
          <div className="mt-10 flex items-center gap-1">
            <ModeToggle />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
