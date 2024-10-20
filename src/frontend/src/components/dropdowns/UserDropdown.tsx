import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/hooks/use-auth";
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Separator } from "../ui/separator";
import { User } from "@/types/model";

interface UserDropdownProps {
  user: User | null; // Allow user to be null initially
}

const UserDropdown: React.FC<UserDropdownProps> = ({ user }) => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  // Check if the user exists before rendering their avatar and details
  const fallbackUser = {
    name: "Guest",
    email: "guest@example.com",
    avatarUrl: "",
    role: "guest"
  };

  const currentUser = user || fallbackUser;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="relative cursor-pointer">
          <Avatar className="relative hover:scale-105 transition-transform">
            {currentUser.avatarUrl ? (
              <AvatarImage src={currentUser.avatarUrl} alt={currentUser.name} />
            ) : (
              <AvatarFallback>{currentUser.name.charAt(0)}</AvatarFallback>
            )}
          </Avatar>
          <ChevronDown className="absolute top-5 left-4 w-4 h-4 font-bold hover:text-blue-500 transition-colors text-white bg-slate-400 dark:bg-slate-900 rounded-full" />
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-full max-w-xs hidden md:flex flex-col"
      >
        <div className="px-3 py-3 flex items-center gap-4">
          <Avatar className="w-12 h-12">
            {currentUser.avatarUrl ? (
              <AvatarImage src={currentUser.avatarUrl} alt={currentUser.name} />
            ) : (
              <AvatarFallback>{currentUser.name.charAt(0)}</AvatarFallback>
            )}
          </Avatar>
          <div>
            <p className="text-sm font-semibold text-gray-900 dark:text-white">
              {currentUser.name}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 truncate w-32">
              {currentUser.email}
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-500">
              {currentUser.role}
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
