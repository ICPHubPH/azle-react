import React from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Menu } from 'lucide-react';
import NavItems from './NavItems';

const MobileMenu: React.FC<{ isOpen: boolean; onToggle: () => void; user: any; navItems: any[] }> = ({ isOpen, onToggle, user, navItems }) => {
  return (
    <Sheet open={isOpen} onOpenChange={onToggle}>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="outline" size="icon">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[250px] sm:w-[300px] z-[1100]">
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
        <nav className="flex flex-col gap-4">
          <ul className="flex flex-col gap-2">
            <NavItems navItems={navItems} closeMenu={onToggle} />
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
