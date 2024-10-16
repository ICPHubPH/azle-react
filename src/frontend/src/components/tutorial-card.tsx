import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Heart } from "lucide-react"; 
import { FC, useState } from "react";

type TutorialCardProps = {
    tutorialImage : string,
    profileImage : string
    profileName : string,
    title : string,
    description : string,
}

const TutorialCard:FC<TutorialCardProps> = ({...params}) => {
    const [onFavorite, setOnFavorite] = useState(false);

    return (
        <Card className="h-96"> 
          <CardHeader className="h-1/2">
           <img className="h-full bg-slate-800 rounded-t-lg object-cover"
                src={params.tutorialImage} 
                alt="tutorial-image"
            />
          </CardHeader>
          <CardContent className="flex flex-col ">
            <div className="flex items-center gap-x-2 py-2">
             <img className="size-10 rounded-full bg-slate-400 object-cover"
                      src={params.profileImage}
                      alt="user-avatar" 
                />
                <CardTitle className="font-medium text-base">{params.profileName}</CardTitle>
            </div>
            <div className="flex flex-col">
                <span className="font-medium text-lg truncate">{params.title}</span>
                <CardDescription className="break-words overflow-hidden h-[4rem] line-clamp-3">
                    {params.description}
                </CardDescription>
            </div>
          </CardContent>
          <CardFooter>
             <div className="flex items-center gap-x-1 text-sm ">
                <Heart 
                       className={`${onFavorite ? 'text-red-500 fill-red-500' : 'text-black'}`} 
                       onClick={() => setOnFavorite(!onFavorite)}
                       size={20}  
                />
                <span>Add to favorites</span>
             </div>
          </CardFooter> 
        </Card>
    )
}

export default TutorialCard;