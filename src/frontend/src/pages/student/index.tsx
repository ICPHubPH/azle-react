
import React from 'react';
import Header from '@/components/student/Header';

const StudentPage: React.FC = () => {
  return (
    <div>
        <Header />
 
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-semibold text-blue-500 dark:text-yellow-500">Student Dashboard</h1>
      <p className="mt-2 text-lg text-gray-800 dark:text-gray-200">
        Welcome to your student dashboard. Here you can manage your courses, view grades, and connect with providers.
      </p>
      {/* Add more content here, such as a list of courses, grades, etc. */}
    </div>
    </div>
  );
};

export default StudentPage;
