import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { UserCircle, Settings } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "@/hooks/use-auth"; // Import the useAuth hook

export default function LeftCardSide() {
  const navigate = useNavigate(); // Initialize useNavigate
  const { data } = useAuth(); // Get user data from AuthContext

  // Check if user data exists
  if (!data) {
    return <div>Loading...</div>; // Optional: Display loading state while user data is being fetched
  }

  return (
    <div className="w-0 md:w-64 lg:w-64 bg-background p-6 flex flex-col space-y-6 border-r h-screen overflow-y-auto sticky top-16">
      <div className="flex flex-col items-center space-y-4">
        <Avatar className="w-20 h-20">
          <AvatarImage src={data.avatarUrl} alt={data.name} />
          <AvatarFallback>{data.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="text-center">
          <h2 className="text-lg font-semibold">{data.name}</h2>
          <p className="text-sm text-muted-foreground">{data.role}</p>
        </div>
      </div>
      <p className="text-sm text-center text-muted-foreground">{data.bio}</p>
      <div className="space-y-2">
        <Button 
          variant="outline" 
          className="w-full justify-start" 
          size="sm" 
          onClick={() => navigate('/profile')} // Navigate to Profile page
        >
          <UserCircle className="mr-2 h-4 w-4" />
          Profile
        </Button>
        <Button 
          variant="outline" 
          className="w-full justify-start" 
          size="sm"
          onClick={() => navigate('/settings')} // Navigate to Account Settings
        >
          <Settings className="mr-2 h-4 w-4" />
          Account Settings
        </Button>
      </div>
      <div className="mt-auto text-xs text-muted-foreground space-y-1">
        <p>Member since {data.createdAt}</p>
        <p>ConnectEd 2024</p>
      </div>
    </div>
  );
}
