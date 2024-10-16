// src/frontend/src/components/provider-component/top-providers/TopProviderCard.tsx
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom"; // Import useNavigate

interface TopProviderCardProps {
  id: string; 
  thumbnail: string;
  avatar?: string | undefined;
  provider: string;
  description: string;
  scholarship: string;
}

const TopProviderCard: React.FC<TopProviderCardProps> = ({
  id, // Get the id from props
  thumbnail,
  provider,
  description,
  scholarship,
  avatar,
}) => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleViewProfile = () => {
    navigate(`/provider-profile/${id}`); // Navigate to the provider profile page
  };

  return (
    <Card className="w-full overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative h-48">
          <img
            src={thumbnail}
            alt="Scholarship background"
            className="w-full h-full object-cover"
          />
          <Avatar className="absolute -translate-y-[50%] left-6 h-[5rem] w-[5rem] border-4 border-background lg:h-[7rem] lg:w-[7rem]">
            <AvatarImage src={avatar} alt="Organization logo" />
            <AvatarFallback>ORG</AvatarFallback>
          </Avatar>
        </div>
      </CardHeader>
      <CardContent className="pt-10 lg:pt-14 pb-6 px-6">
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg">{provider}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
          {/* <h4 className="text-xl font-bold">{scholarship}</h4> */}
        </div>
        <Button className="mt-5" onClick={handleViewProfile}> {/* Add onClick handler */}
          View Profile
        </Button>
      </CardContent>
    </Card>
  );
};

export default TopProviderCard;
