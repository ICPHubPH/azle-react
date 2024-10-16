import { Link } from 'react-router-dom'
import { Briefcase, Home, Search, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Header from '@/components/header/UserHeader'
import Footer from '@/components/footer/Footer'

export default function NotFoundPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex items-center justify-center">
        <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-8">
          <Briefcase className="h-24 w-24 text-gray-400" />
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">404 - Page Not Found</h1>
          <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
            Oops! It seems the workspace you're looking for doesn't exist. Let's get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg">
              <Link to="/">
                <Home className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}