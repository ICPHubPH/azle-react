import React from 'react'

// Define the prop types for a single testimony card
interface TestimonyCardProps {
  avatar: string;
  name: string;
  testimony: string;
}

const TestimonyCard: React.FC<TestimonyCardProps> = ({ avatar, name, testimony }) => {
  return (
    <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-md p-4 max-w-sm mx-auto mb-4">
      <div className="flex items-center space-x-4">
        {/* Student Avatar */}
        <img src={avatar} alt={`${name}'s avatar`} className="w-16 h-16 rounded-full" />

        {/* Student Name and Testimony */}
        <div>
          <h2 className="text-lg font-semibold dark:text-white">{name}</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">{testimony}</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonyCard
