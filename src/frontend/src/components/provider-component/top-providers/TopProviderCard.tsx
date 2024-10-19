import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom"; 
import { User } from "@/types/model";

const DEFAULT_BANNER_URL = "path/to/default-banner-url.jpg"; // Define your default URL
const DEFAULT_AVATAR_URL = "path/to/default-avatar-url.jpg"; // Define your default URL

const TopProviderCard: React.FC<{ provider: User }> = ({ provider }) => {
  const navigate = useNavigate();
  const { id, name, bannerUrl, avatarUrl, bio } = provider;

  const handleViewProfile = () => {
    navigate(`/provider-profile/${id}`);
  };

  return (
    <Card className="w-full overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative h-48">
          <img
            src={bannerUrl || DEFAULT_BANNER_URL} // Use constant for default banner
            alt={`${name}'s banner`} // Improved alt text for accessibility
            className="w-full h-full object-cover"
          />
          <Avatar className="absolute -translate-y-[50%] left-6 h-[5rem] w-[5rem] border-4 border-background lg:h-[7rem] lg:w-[7rem]">
            <AvatarImage 
              src={avatarUrl || DEFAULT_AVATAR_URL} // Use constant for default avatar
              alt={`${name}'s avatar`} // Improved alt text for accessibility
            />
            <AvatarFallback>{name.charAt(0)}</AvatarFallback> {/* Fallback uses the first letter of the name */}
          </Avatar>
        </div>
      </CardHeader>
      <CardContent className="pt-10 lg:pt-14 pb-6 px-6">
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">{name}</h3>
          {bio && <p className="text-sm text-muted-foreground">{bio}</p>} {/* Conditional rendering for bio */}
        </div>
        <Button className="mt-5" onClick={handleViewProfile}>
          View Profile
        </Button>
      </CardContent>
    </Card>
  );
};

export default TopProviderCard;
