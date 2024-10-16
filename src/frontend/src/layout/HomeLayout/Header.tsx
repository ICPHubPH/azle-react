import { CategoriesCB } from "@/components/catergories-cb"
import { Input } from "@/components/ui/input"
import UserSetting from "@/components/user-setting"
import { PageRoutes } from "@/constants/PageRoutes"
import { Bell, CirclePlus, Search } from "lucide-react"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="py-4 w-full grid grid-cols-3 items-center ">
      <Link className="flex items-center gap-x-2 w-fit cursor-pointer"
         to={PageRoutes.Home}
      >
					<img className="size-14 " src="Logo.png" alt="logo" />
          <img className="h-6" src="plantaria-logo.png" alt="plantaria-logo" />
			</Link>

      <div className="relative flex gap-x-3 flex-1">
        <CategoriesCB/>
        <Input className="border border-black rounded-full pl-4 pr-12 py-2 w-full" placeholder="Search..." />     
        <div className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-lima-500 rounded-full p-1.5">
          <Search color="#ffffff" strokeWidth={2} size={20} />
        </div>
      </div>

      <div className="flex gap-x-4 items-center justify-end">
        <CirclePlus className="cursor-pointer text-lima-500" size={28} />
        <Bell className="cursor-pointer text-lima-500" size={28} /> 
        <UserSetting/>
      </div>
    </header>
  )
}

export default Header