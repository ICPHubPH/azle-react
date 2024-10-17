import React from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

interface MobileMenuProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
  navItems: { name: string; href: string }[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  navItems,
}) => {
  return (
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
                  <a href={item.href} className="hover:underline">
                    {item.name}
                  </a>
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
