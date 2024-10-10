import React from 'react';
import { Button } from "@/components/ui/button"
import Header from '../components/Header';
import { ModeToggle } from '@/components/mode-toggle';

const Home: React.FC = () => {
  return (
    <div>
        <Header />
    <div className="flex flex-col items-center justify-center h-screen">
    
      <h1 className="text-4xl text-blue-600 dark:text-orange-400">Welcome to ISKOLAR PILIPINAS!</h1>
      <p className="text-lg text-gray-800 dark:text-gray-200">Connecting students and providers for quality education.</p>
      <Button variant="outline">Button</Button>


      {/* <Button label="Get Started" onClick={() => alert('Button clicked!')} /> */}
    </div>
    </div>
  );
};

export default Home;
