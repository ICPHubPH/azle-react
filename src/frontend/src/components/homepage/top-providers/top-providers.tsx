import React from 'react'
import TopProviderCard from './top-provider-card'

// TODO: add real data
const topProviders = [
  {
    thumbnail: "https://via.placeholder.com/400x200?text=Scholarship+1",
    avatar: "https://via.placeholder.com/150?text=Org+1",
    provider: "Tech Innovators Foundation",
    description: "Empowering the next generation of tech leaders",
    scholarship: "Future Tech Leaders Scholarship 2024",
  },
  {
    thumbnail: "https://via.placeholder.com/400x200?text=Scholarship+2",
    avatar: "https://via.placeholder.com/150?text=Org+2",
    provider: "Global Scholars Program",
    description: "Promoting global education and innovation",
    scholarship: "Global Visionary Scholarship 2024",
  },
  {
    thumbnail: "https://via.placeholder.com/400x200?text=Scholarship+3",
    avatar: "https://via.placeholder.com/150?text=Org+3",
    provider: "STEM Excellence Foundation",
    description: "Supporting excellence in STEM education",
    scholarship: "STEM Leaders Scholarship 2024",
  },
  {
    thumbnail: "https://via.placeholder.com/400x200?text=Scholarship+4",
    avatar: "https://via.placeholder.com/150?text=Org+4",
    provider: "Innovation for All",
    description: "Creating equal opportunities for future innovators",
    scholarship: "Inclusive Innovation Scholarship 2024",
  },
  {
    thumbnail: "https://via.placeholder.com/400x200?text=Scholarship+5",
    avatar: "https://via.placeholder.com/150?text=Org+5",
    provider: "NextGen Tech Alliance",
    description: "Fostering next-gen leaders in technology",
    scholarship: "NextGen Tech Scholarship 2024",
  }
];
  

const TopProviders: React.FC = () => {
  return (
    <section className="pt-20 px-10">
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-600 dark:text-yellow-500">Providers Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {topProviders.map((provider, index) => (
          <TopProviderCard key={index} thumbnail={provider.thumbnail} avatar={provider.avatar} provider={provider.provider} description={provider.description} scholarship={provider.scholarship}/>
        ))}
      </div>
    </section>
  )
}

export default TopProviders
