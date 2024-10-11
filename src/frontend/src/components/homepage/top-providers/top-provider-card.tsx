import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";
import { Button } from "@/components/ui/button";

interface TopProviderCardProps {
  thumbnail: string;
  avatar?: string | undefined;
  provider: string;
  description: string;
  scholarship: string;
}

const TopProviderCard: React.FC<TopProviderCardProps> = ({
  thumbnail,
  provider,
  description,
  scholarship,
  avatar,
}) => {
  return (
    <Card className="w-full max-w-md overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative h-48">
          <img
            src={thumbnail}
            alt="Scholarship background"
            className="w-full h-full object-cover"
          />
          <Avatar className="absolute -bottom-6 left-6 h-16 w-16 border-4 border-background">
            <AvatarImage src={avatar} alt="Organization logo" />
            <AvatarFallback>ORG</AvatarFallback>
          </Avatar>
        </div>
      </CardHeader>
      <CardContent className="pt-8 pb-6 px-6">
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg">{provider}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
          <h4 className="text-xl font-bold">{scholarship}</h4>
        </div>
        <Button className="mt-5">View Profile</Button>
      </CardContent>
    </Card>
  );
};

export default TopProviderCard;
