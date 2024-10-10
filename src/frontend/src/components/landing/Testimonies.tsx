import React from 'react'
import TestimonyCard from './Testimony'

// Sample testimony data
const testimonies = [
  {
    avatar: 'https://via.placeholder.com/150', // Placeholder avatar image (replace with actual image URLs)
    name: 'Juan Dela Cruz',
    testimony: 'ISKOLAR PH helped me find a scholarship that suited my needs. Highly recommended!',
  },
  {
    avatar: 'https://via.placeholder.com/150',
    name: 'Maria Clara',
    testimony: 'The process was seamless, and the support from the team was amazing!',
  },
  {
    avatar: 'https://via.placeholder.com/150',
    name: 'Jose Rizal',
    testimony: 'With ISKOLAR PH, I was able to connect with providers and get the support I needed for my education.',
  },
  {
    avatar: 'https://via.placeholder.com/150', // Placeholder avatar image (replace with actual image URLs)
    name: 'Juan Dela Cruz',
    testimony: 'ISKOLAR PH helped me find a scholarship that suited my needs. Highly recommended!',
  },
  {
    avatar: 'https://via.placeholder.com/150',
    name: 'Maria Clara',
    testimony: 'The process was seamless, and the support from the team was amazing!',
  },
  {
    avatar: 'https://via.placeholder.com/150',
    name: 'Jose Rizal',
    testimony: 'With ISKOLAR PH, I was able to connect with providers and get the support I needed for my education.',
  },
]

const Testimonies: React.FC = () => {
  return (
    <section className="py-8 px-4">
      <h2 className="text-3xl font-bold text-center mb-6 dark:text-white">Student Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonies.map((testimony, index) => (
          <TestimonyCard key={index} avatar={testimony.avatar} name={testimony.name} testimony={testimony.testimony} />
        ))}
      </div>
    </section>
  )
}

export default Testimonies
