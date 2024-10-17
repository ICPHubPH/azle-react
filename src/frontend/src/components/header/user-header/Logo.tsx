// src/components/header/Logo.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface LogoProps {
  userRole: string;
}

const Logo: React.FC<LogoProps> = ({ userRole }) => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    if (userRole === 'Student' || userRole === 'Provider') {
      navigate('/home');
    } else {
      navigate('/');
    }
  };

  return (
    <h1
      className="text-2xl font-bold bg-gradient-to-r from-[#0038a9] via-[#ce1127] to-[#f5ce31] bg-clip-text text-transparent cursor-pointer"
      onClick={handleLogoClick}
    >
      ConnectED
    </h1>
  );
};

export default Logo;
