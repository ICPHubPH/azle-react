import React from 'react'

// Define the prop types for a single provider card
interface ProviderCardProps {
  avatar: string;
  name: string;
  provider: string;
}

const ProviderCard: React.FC<ProviderCardProps> = ({ avatar, name, provider }) => {
  return (
    <div className="   rounded-lg shadow-md p-8 max-w-sm mx-auto mb-6 text-center">
      <div className="flex flex-col items-center space-y-4">
        {/* Student Avatar */}
        <img src={avatar} alt={`${name}'s avatar`} className="w-30 h-30 rounded-full" />

        {/* Student Name and provider */}
        <div className='flex flex-col items-center'>
          <h2 className="text-xl font-bold dark:text-white">{name}</h2>
          <p className="text-base text-gray-700 dark:text-gray-300 mt-2">{provider}</p>
        </div>
      </div>
    </div>
  )
}

export default ProviderCard
