// src/components/student/UpperContent.tsx
import React, { useState } from 'react';
import { Search } from 'lucide-react'; // Importing the search icon from lucide-react
import CreatePost from '../post-form/CreatePost';


const UpperContent: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="flex justify-center py-10  rounded-lg ">
      <div className='flex flex-col items-center text-center max-w-2xl  '>
        <h1 className='text-3xl font-bold mb-4 text-slate-900 dark:text-slate-100'>
          Welcome Providers
        </h1>
        <CreatePost/>
       
        
        {/* Search Bar */}
        <div className="relative w-full max-w-md">
          <input 
            type="text"
            className="w-full px-5 py-3 pl-12 border border-transparent shadow-lg rounded-full text-slate-800 dark:text-slate-100 bg-white dark:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-400 dark:focus:ring-slate-500 transition-all"
            placeholder="Search for opportunities..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          {/* Search Icon from Lucide */}
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-slate-500 dark:text-slate-400" />
          
        </div>
      </div>
    </div>
  );
};

export default UpperContent;
