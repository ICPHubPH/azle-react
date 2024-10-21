// src/frontend/src/components/dropdowns/UserDropdown.tsx

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useNavigate } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "../ui/separator";
import { User } from "@/types/model";
import { ChevronDown } from "lucide-react";

interface UserDropdownProps {
  user: User; // Accept user data as a prop
  loading: boolean; // Accept loading state as a prop
}

const UserDropdown: React.FC<UserDropdownProps> = ({ user, loading }) => {
  const navigate = useNavigate();
  
  // Show skeleton loading UI while data is being fetched
  if (loading) {
    return <UserDropdownSkeleton />;
  }


  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
};
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="relative cursor-pointer">
          <Avatar className="relative hover:scale-105 transition-transform">
            <AvatarImage
              src={user.avatarUrl || "/default-avatar.png"}
              alt={user.name || "User Avatar"}
            />
            <AvatarFallback>
              {user.name ? user.name.charAt(0) : "?"}
            </AvatarFallback>
          </Avatar>
          <ChevronDown className="absolute top-5 left-4 w-4 h-4 font-bold hover:text-blue-500 transition-colors text-white bg-slate-400 dark:bg-slate-900 rounded-full" />

        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end"         className="w-full max-w-xs hidden md:flex flex-col"
>
        <div className="px-3 py-3 flex items-center gap-4">
          <Avatar className="w-12 h-12">
            <AvatarImage
              src={user.avatarUrl || "/default-avatar.png"}
              alt={user.name || "User Avatar"}
            />
            <AvatarFallback>
              {user.name ? user.name.charAt(0) : "?"}
            </AvatarFallback>

          </Avatar>
          
          
          <div>
            <p className="text-sm font-semibold text-gray-900 dark:text-white">
              {user.name || "Unknown User"}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 truncate w-32">
              {user.email || "No email available"}
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-500">
              {user.role || "Unknown role"}
            </p>
          </div>
        </div>
        <div className="pt-2">
          <Separator />
        </div>


        <DropdownMenuItem onSelect={() => navigate("/profile")}>
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={handleLogout}>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

function UserDropdownSkeleton() {
  return (
    <div className="flex items-center gap-4">
      <Skeleton className="w-12 h-12 rounded-full" />
      <div>
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-3 w-24 mt-1" />
        <Skeleton className="h-3 w-20 mt-1" />
      </div>
    </div>
  );
}

export default UserDropdown;
