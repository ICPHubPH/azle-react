import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Pencil, Settings, LogOut } from "lucide-react";

interface ProfileSidebarProps {
  user: { name: string; email: string; avatar: string };
}

export default function ProfileSidebar({ user }: ProfileSidebarProps) {
  return (
    <aside>
      <Card className="border-none shadow-none">
        <CardHeader>
          <Avatar className="h-60 w-60 md:h-36 md:w-36 lg:h-60 lg:w-60 mx-auto">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <CardTitle className="text-4xl md:text-2xl font-bold text-center md:text-start">
            {user.name}
          </CardTitle>
          <CardDescription className="text-center md:text-start">
            {user.email}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <nav className="flex flex-col space-y-1">
            <Button variant="ghost" className="justify-start font-normal">
              <Pencil className="mr-2 h-4 w-4" />
              Edit
            </Button>
            <Button variant="ghost" className="justify-start font-normal">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
            <Button
              variant="ghost"
              className="justify-start text-red-500 hover:text-red-600 hover:bg-red-100 font-normal"
            >
              <LogOut className="mr-2 h-4 w-4" />
              Log out
            </Button>
          </nav>
        </CardContent>
      </Card>
    </aside>
  );
}