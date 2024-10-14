import Facebook from "@/assets/icons/facebook"
import { Home, Phone } from "lucide-react"


const Footer = () => {
  return (
    <footer className="py-8 flex items-center justify-center ">
      <div className="container grid grid-cols-3">
        <div className="flex flex-col items-center gap-y-1 md:items-start ">
          <div className="flex items-center mb-4 ">
            <img
              src="Logo.png"
              alt="Logo"
              className="h-10 w-10" 
            />
            <span className="ml-2 text-lg font-bold">Project Name</span>
          </div>
          <p className="text-gray-600 flex items-center gap-x-2">
            <Home/>
            <span>University Heights BSU Sarmiento Campus.</span>
          </p>
          <p className="text-gray-600 flex items-center gap-x-2">
            <Phone/> 
            <span>+935 785 0648</span>
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" aria-label="Facebook">
               <Facebook color="#111111"/>
            </a>
          </div>
        </div>

        <div className="text-center md:text-left mt-6 md:mt-0 ">
          <h3 className="font-semibold text-lg mb-4">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-600 hover:underline">Our Story</a></li>
            <li><a href="#" className="text-gray-600 hover:underline">FAQ</a></li>
            <li><a href="#" className="text-gray-600 hover:underline">Meet the team</a></li>
            <li><a href="#" className="text-gray-600 hover:underline">Testimonials</a></li>
          </ul>
        </div>

        <div className="text-center md:text-left mt-6 md:mt-0 ">
          <h3 className="font-semibold text-lg mb-4">Privacy & Terms</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-600 hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="text-gray-600 hover:underline">Terms of Use</a></li>
            <li><a href="#" className="text-gray-600 hover:underline">Community Guideline</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer