import React from "react";
import Header from "../../components/Header";
import { Separator } from "@/components/ui/separator";
import Testimonies from "@/components/landing/testimonies/Testimonies";
import Providers from "@/components/landing/donor/Providers";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { Star, Bookmark, MessageSquare } from "lucide-react";

const Home: React.FC = () => {
  return (
    <div className="scroll-smooth">
      <Header />
      <div
        className="flex flex-col items-center justify-center h-screen"
        id="home"
      >
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold text-blue-500 dark:text-yellow-500">
          Welcome to ISKOLAR PH!
        </h1>
        <p className="text-lg text-gray-800 dark:text-gray-200">
          Connecting students and providers for quality education.
        </p>
      </div>
      <Separator />
      <div className="container mx-auto px-4" id="testimonies">
        <Testimonies />
      </div>
      <Separator />
      <div className="container mx-auto px-4" id="providers">
        <Providers />
      </div>

      <Card
        className="w-[22.5%] mx-auto my-[2rem] cursor-pointer"
        onClick={() => alert("card")}
      >
        <CardHeader className="py-4">
          <div className="w-full flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <Avatar className="w-14 h-14">
                <AvatarImage
                  className="aspect-square object-cover rounded-full"
                  src="https://scontent.fbag4-1.fna.fbcdn.net/v/t39.30808-6/440166746_25371551272492353_7022797428020999409_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeE6YN-LerRQeT9r5QJmhKUTkjRxWwzQgW6SNHFbDNCBbs5Je_9d1VcuTlg6UQQz3Y7v3pPfWBH0ypDLTs6CYgp8&_nc_ohc=zDCXAJF4SRMQ7kNvgEWMCra&_nc_zt=23&_nc_ht=scontent.fbag4-1.fna&_nc_gid=ADpMrcrs0gw9mMif2vpRlAE&oh=00_AYDiko7FOugIW24FHSD7MeqcxXe2c_3_Pi4EPTub1rlk2g&oe=670DE34E"
                  alt="@kurtd"
                />
                <AvatarFallback>Kurtd Daniel</AvatarFallback>
              </Avatar>

              <div className="flex flex-col gap-.5">
                <h3
                  className="text-md font-medium z-[1] w-max"
                  onClick={(e) => {
                    alert("name");
                    e.stopPropagation();
                  }}
                >
                  @kurtddanielbigtas
                </h3>
                <p className="text-xs text-gray-500">
                  kurtddanielbigtas@gmail.com
                </p>
              </div>
            </div>
            <small className="text-gray-500">4h</small>
          </div>
        </CardHeader>
        <Separator className="mb-4" />
        <CardContent className="pb-4">
          <div className="w-full flex flex-col gap-2">
            <div className="w-full flex flex-col gap-1">
              <h3 className="text-md font-medium">Scholar+</h3>
              <img
                src="https://scontent.fbag4-1.fna.fbcdn.net/v/t1.6435-9/127186910_4643034792437304_4748228204220379737_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=2a1932&_nc_eui2=AeEn1jqbM0Fue8lCLHGdGydoU1ooZb1W37FTWihlvVbfscBOUOCtuYtSx8Q8qGEFfkRZCi2ENE68VWesmHOiHFqA&_nc_ohc=AfXbLPUi358Q7kNvgEm2yIX&_nc_zt=23&_nc_ht=scontent.fbag4-1.fna&_nc_gid=AnNKJKPScLZFOzpXeOMyTJN&oh=00_AYC_fpcwbfAWqa2vMjXNFsC7ZYlTU4J_pBNQC970l6Dtwg&oe=672F5ECB"
                alt="thumbnail"
                className="w-full rounded-md object-contain"
              />
            </div>

            <div className="w-full flex flex-col gap-1">
              <p className="text-xs text-gray-500 line-clamp-2">
                {/**Description here should only be two lines, if text is too long to cater, display ellipsis */}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                illum, perferendis nemo maiores obcaecati eveniet ipsam illo
                iure? Commodi libero laboriosam impedit architecto omnis saepe,
                aliquam recusandae autem temporibus molestias cupiditate dicta
                at sapiente suscipit non dolores hic. Modi, a! Deleniti
                expedita, culpa optio fugiat totam mollitia architecto ipsa
                quos.
              </p>
            </div>
          </div>
        </CardContent>

        <div className="w-full h-12 rounded-b-md flex justify-between items-center px-4 border-t">
          <div className="flex items-center gap-1">
            <small>4.5</small>
            <Star className="w-4" />
          </div>
          <div className="flex gap-4 items-center">
            <div className="flex items-center gap-1">
              <small>53</small>
              <Bookmark className="w-4" />
            </div>
            <div className="flex items-center gap-1">
              <small>23</small>
              <MessageSquare className="w-4" />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Home;
