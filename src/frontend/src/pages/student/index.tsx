
import React from 'react';
import Header from '@/components/student/Header';
import UpperContent from '@/components/student/UpperContent';

const StudentPage: React.FC = () => {
  return (
    <div className='min-h-screen '>
        <Header />
 
    <div className="container mx-auto px-4">
        <UpperContent/>
    </div>
    </div>
  );
};

export default StudentPage;
