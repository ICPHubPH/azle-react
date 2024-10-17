import React from "react";
import { Button } from "@/components/ui/button";

interface DesktopMenuProps {
  navItems: { name: string; href: string }[];
}

const DesktopMenu: React.FC<DesktopMenuProps> = ({ navItems }) => {
  return (
    <ul className="hidden md:flex space-x-4">
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
  );
};

export default DesktopMenu;
