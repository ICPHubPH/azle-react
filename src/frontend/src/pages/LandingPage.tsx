import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

const links = [
  { url  : '/',     name : 'Home' },
  { url : '/about', name : 'About' },
  { url : '/goals', name : 'Goals' }
]

const LandingPage = () => {
  return (
    <div className="h-screen mx-[75px]">
       <header className="p-4 grid grid-cols-3	">
          <div className="flex items-center gap-x-4">
            <img className="h-14 w-14 bg-primary"
                  src="" 
                  alt="logo"
              />
            <h1 className="font-poppins font-medium text-xl text-foreground">Project Name</h1>
          </div>

          <nav className="flex justify-evenly items-center">
              {links.map((value, index) => (
               <Link className="text-lg hover:underline font-medium"
                     key={index} 
                     to={value.url}
               >{value.name}</Link>
              ))}
          </nav>
          
          <div className=" flex justify-end items-center gap-x-4">
            <Link to='/'>
               <Button variant='ghost'>Login</Button>
            </Link>
            <Link to='/'>
              <Button>Sign Up</Button>
             </Link>
          </div>
       </header>
    </div>
  )
}

export default LandingPage