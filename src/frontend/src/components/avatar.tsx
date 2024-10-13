import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FC } from "react";

type ProfileProps = {
   userProfile?: string; 
   style?: string; 
};

const Profile: FC<ProfileProps> = ({ userProfile, style}) => {
    return (
        <Avatar className={style}>
            {userProfile ? (
                <AvatarImage
                    src={userProfile}
                    alt="User profile image"
                />
            ) : (
                <AvatarFallback>CN</AvatarFallback>
            )}
        </Avatar>
    );
};

export default Profile;
