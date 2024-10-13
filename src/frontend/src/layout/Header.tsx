import { CategoriesCB } from "@/components/catergories-cb"
import { Input } from "@/components/ui/input"
import UserSetting from "@/components/user-setting"
import { Bell, CirclePlus, Search } from "lucide-react"

const Header = () => {
  return (
    <header className="py-4 flex justify-between items-center ">
      {/* Logo and Title */}
      <div className="flex items-center gap-x-2 w-1/4">
					<img className="size-14 " src="Logo.png" alt="logo" />
					<h1 className="font-medium text-lg text-foreground">Project Name</h1>
			</div>

      {/* Search Bar */}
      <div className="relative flex gap-x-3 flex-1">
        <CategoriesCB/>
        <Input className="border border-black rounded-full pl-4 pr-12 py-2 w-full" placeholder="Search..." />     
        <div className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-lima-500 rounded-full p-1.5">
          <Search color="#ffffff" strokeWidth={2} size={20} />
        </div>
      </div>

      {/* Icons and User Profile */}
      <div className="flex gap-x-4 items-center justify-end w-1/3">
        <CirclePlus className="cursor-pointer text-lima-500" size={28} />
        <Bell className="cursor-pointer text-lima-500" size={28} /> 
        <UserSetting/>
      </div>
    </header>
  )
}

export default Header