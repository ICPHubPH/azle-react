import React, { useState } from 'react'
import { ModeToggle } from "./mode-toggle"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Updated the nav items with anchor links for section navigation
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Testimonies', href: '#testimonies' },
    { name: 'Providers', href: '#providers' },
  ]

  const NavItems = () => (
    <>
      {navItems.map((item) => (
        <li key={item.name}>
<Button variant="ghost" asChild className="w-full justify-start hover:bg-transparent hover:text-blue-500 transition-colors duration-200 dark:hover:text-yellow-500 t">
<a
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:underline hover:text-blue-500  dark:hover:text-yellow-500 transition-colors duration-200"
            >
              {item.name}
            </a>
          </Button>
        </li>
      ))}
    </>
  )

  return (
    <header className="border-b z-50 sticky top-0 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-500 dark:text-yellow-500">ISKOLAR PH</h1>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-4">
            <NavItems />
          </ul>

          {/* Mobile Menu */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[240px] sm:w-[300px]">
              <nav className="flex flex-col gap-4">
                <ul className="flex flex-col gap-2">
                  <NavItems />
                </ul>
              </nav>
            </SheetContent>
          </Sheet>

          <div className="items-center space-x-4 hidden md:flex">
            <ModeToggle />
            <Button variant="outline" className="hidden md:inline-flex">Sign In</Button>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
