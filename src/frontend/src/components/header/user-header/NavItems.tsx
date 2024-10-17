import React from 'react';
import { Button } from '@/components/ui/button';
import { useLocation, useNavigate } from 'react-router-dom';

interface NavItem {
  name: string;
  path: string;
}

const NavItems: React.FC<{ navItems: NavItem[]; closeMenu?: () => void }> = ({ navItems, closeMenu }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
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
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                  closeMenu && closeMenu();
                  navigate(item.path);
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
};

export default NavItems;
