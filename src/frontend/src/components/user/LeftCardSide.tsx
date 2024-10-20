import React, { useEffect, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { UserCircle, Settings } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "@/hooks/use-auth";
import { Skeleton } from "@/components/ui/skeleton";
import { format } from 'date-fns'; // Import date-fns for date formatting


export default function LeftCardSide() {
  const navigate = useNavigate();
  const { data } = useAuth(); 
  const [isLoading, setIsLoading] = useState(true); // Manage loading state locally

  useEffect(() => {
    // Simulate loading data, adjust this logic as needed
    if (data) {
      setIsLoading(false);
    }
  }, [data]);

  if (isLoading) {
    return <LeftCardSideSkeleton />;
  }

  if (!data) {
    return <div>Error loading user data</div>;
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
          onClick={() => navigate('/profile')}
        >
          <UserCircle className="mr-2 h-4 w-4" />
          Profile
        </Button>
        <Button 
          variant="outline" 
          className="w-full justify-start" 
          size="sm"
          onClick={() => navigate('/settings')}
        >
          <Settings className="mr-2 h-4 w-4" />
          Account Settings
        </Button>
      </div>
      <div className="mt-auto text-xs text-muted-foreground space-y-1">
      <p>Member since {data.createdAt ? format(new Date(data.createdAt), 'MMMM dd, yyyy') : 'N/A'}</p>
      <p>ConnectEd 2024</p>
      </div>
    </div>
  );
}

function LeftCardSideSkeleton() {
  return (
    <div className="w-0 md:w-64 lg:w-64 bg-background p-6 flex flex-col space-y-6 border-r h-screen overflow-y-auto sticky top-16">
      <div className="flex flex-col items-center space-y-4">
        <Skeleton className="w-20 h-20 rounded-full" />
        <div className="text-center space-y-2">
          <Skeleton className="h-6 w-32 mx-auto" />
          <Skeleton className="h-4 w-24 mx-auto" />
        </div>
      </div>
      <Skeleton className="h-16 w-full" />
      <div className="space-y-2">
        <Skeleton className="h-9 w-full" />
        <Skeleton className="h-9 w-full" />
      </div>
      <div className="mt-auto space-y-1">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-4 w-24" />
      </div>
    </div>
  );
}
