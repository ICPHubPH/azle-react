import React from 'react'
import Header from '../../components/Header'
import { Separator } from "@/components/ui/separator"
import Testimonies from '@/components/landing/Testimonies'
// import CreatePost from '@/components/create-post'

const Home: React.FC = () => {
  return (
    <div className=''>
      <Header />
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl md:text-5xl lg:text-7xl text-blue-600 dark:text-orange-400 font-semibold">Welcome to ISKOLAR PH!</h1>
        <p className="text-lg text-gray-800 dark:text-gray-200">Connecting students and providers for quality education.</p>
       
      </div>
      <Separator />
      {/* Add Testimonies Section Below */}
      <div className="container mx-auto px-4">
        <Testimonies />
      </div>
    </div>
  )
}

export default Home
