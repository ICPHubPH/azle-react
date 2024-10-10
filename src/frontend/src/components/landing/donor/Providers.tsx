import React from 'react'
import ProviderCard from './Provider'

// Updated provider data for a more diverse set of testimonials
const providers = [
  {
    avatar: 'https://via.placeholder.com/150',
    name: 'Mayor Antonio Reyes',
    provider: 'Our city government is proud to partner with ISKOLAR PH in providing educational opportunities to underprivileged students.',
  },
  {
    avatar: 'https://via.placeholder.com/150',
    name: 'Hon. Maria Santos',
    provider: 'As a representative of the youth sector, I have seen first-hand how ISKOLAR PH bridges the gap between students and educational support.',
  },
  {
    avatar: 'https://via.placeholder.com/150',
    name: 'Kalinga Partylist',
    provider: 'Through our partnership with ISKOLAR PH, we’ve been able to reach thousands of students in need of financial assistance.',
  },
  
  
 
]

const Providers: React.FC = () => {
  return (
    <section className="pt-20 px-10">
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-600 dark:text-yellow-500">Providers Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8">
        {providers.map((provider, index) => (
          <ProviderCard key={index} avatar={provider.avatar} name={provider.name} provider={provider.provider} />
        ))}
      </div>
    </section>
  )
}

export default Providers
