import { CategoriesCB } from "@/components/CategoriesCB"
import { Input } from "@/components/ui/input"
import { Bell, Search, Settings } from "lucide-react"

const Header = () => {
  return (
    <header className="p-4 grid grid-cols-3 gap-x-4 mx-[75px] items-center">
				<div className="flex items-center gap-x-4">
					<img className="h-14 w-14 bg-primary" src="" alt="logo" />
					<h1 className="font-medium text-xl text-foreground">Project Name</h1>
          <CategoriesCB/>
				</div>
        <div className="relative">
          <Input className="border border-black rounded-full outline-none"/>     
          <div className="absolute right-1 top-1 bg-lima-500 rounded-full p-1.5 ">
            <Search color="#ffffff" strokeWidth={2} size={20}/> 
          </div>
        </div>
        <div className="flex gap-x-2">
         <Bell />
         <Settings /> 

        </div>
			</header>
  )
}

export default Header