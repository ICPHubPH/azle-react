import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/hooks/use-auth";
import { ChevronDown } from "lucide-react"; // Import the ChevronDown icon
import { useNavigate } from "react-router-dom";
import { Separator } from "../ui/separator";

interface User {
  name: string;
  email: string;
  role: string;
  avatarUrl: string;
}

const UserDropdown: React.FC<{ user: User }> = ({ user }) => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="relative cursor-pointer ">
          {/* Avatar */}
          <Avatar className="relative hover:scale-105 transition-transform">
            <AvatarImage src={user.avatarUrl} />
            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
          </Avatar>

          {/* ChevronDown icon positioned at the bottom-right of the Avatar */}
          <ChevronDown className="absolute top-5 left-4 w-4 h-4 font-bold hover:text-blue-500 transition-colors text-white bg-slate-400 dark:bg-slate-900  rounded-full" />
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-full max-w-xs hidden md:flex flex-col "
      >
        <div className="px-3 py-3 flex items-center gap-4">
          <Avatar className="w-12 h-12">
            <AvatarImage src={user.avatarUrl} />
            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="">
            <p className="text-sm font-semibold text-gray-900 dark:text-white">
              {user.name}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {user.email}
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-500">
              {user.role}
            </p>
          </div>
        </div>
        <div className="pt-2">
          <Separator />
        </div>
        <DropdownMenuLabel />

        <DropdownMenuItem
          onSelect={() => {
            navigate("/profile");
          }}
        >
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={handleLogout}>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
