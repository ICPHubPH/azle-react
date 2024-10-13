import { ChevronDown, LifeBuoy, LogOut, Settings, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import Profile from "./avatar";

const UserSetting = () => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button className="flex items-center gap-x-1 bg-lima-500 text-white rounded px-2 py-3">
					<Profile userProfile="https://github.com/shadcn.png" />
					<ChevronDown />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56">
				<DropdownMenuLabel>My Account</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuItem>
						<Link to="/account" className="w-full">
							<User className="mr-2 size-4 inline" />
							Profile
						</Link>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<Settings className="mr-2 size-4 inline" />
						<span>Settings</span>
					</DropdownMenuItem>
				</DropdownMenuGroup>
				<DropdownMenuSeparator />
				<DropdownMenuItem>
					<LifeBuoy className="mr-2 size-4 inline" />
					<span>Support</span>
				</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem>
					<LogOut className="mr-2 size-4 inline" />
					<span>Log out</span>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default UserSetting;
