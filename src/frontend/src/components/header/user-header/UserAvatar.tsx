// src/components/header/UserAvatar.tsx

import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface UserAvatarProps {
  user: {
    name: string;
    avatarUrl: string;
  };
}

const UserAvatar: React.FC<UserAvatarProps> = ({ user }) => (
  <Avatar className="w-12 h-12">
    <AvatarImage src={user.avatarUrl} />
    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
  </Avatar>
);

export default UserAvatar;
