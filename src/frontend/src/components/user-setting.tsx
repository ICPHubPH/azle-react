import {
    ChevronDown,
    LifeBuoy,
    LogOut,
    Settings,
    User,
  } from "lucide-react"
  import { Button } from "@/components/ui/button"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu" 
import { Link } from "react-router-dom"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

  const UserSetting = () => {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button className="flex items-center gap-x-2 bg-lima-500 text-white rounded px-4">
                <Avatar>
                    <AvatarImage 
                        src="https://github.com/shadcn.png"
                        alt="user"
                        className=""
                    />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex items-center gap-x-2">
                    <span>Darvey Trinidad</span>
                    <ChevronDown />
                </div>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <Link to='/account'>Profile</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <LifeBuoy className="mr-2 h-4 w-4" />
            <span>Support</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }
  
  export default UserSetting