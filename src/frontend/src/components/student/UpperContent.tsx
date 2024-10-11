// src/components/student/UpperContent.tsx
import React, { useState } from 'react';

const UpperContent: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="">
        
       

    </div>
  );
};

export default UpperContent;
