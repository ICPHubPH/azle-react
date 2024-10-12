import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { Separator } from "@/components/ui/separator";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import { Bookmark, CalendarDays, Forward, Star } from "lucide-react";
import { useEffect, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { Button } from "../ui/button";

interface PostSummaryCardProps {
  postAuthorEmail: string;
  postAuthorName: string;
  postAuthorAvatarSource: string;
  postTitle: string;
  postThumbnailSource: string;
  postDescription: string;
  postRatingCount: number;
  postBookmarkCount: number;
  postCommentCount: number;
}

const PostSummaryCard: React.FC<PostSummaryCardProps> = ({
  postAuthorEmail,
  postAuthorName,
  postAuthorAvatarSource,
  postTitle,
  postThumbnailSource,
  postDescription,
  postRatingCount,
  postBookmarkCount,
  postCommentCount,
}) => {
  const alt = `@${postAuthorEmail.split("@")[0]}`;

  const [ratingsUsers, setRatingsUsers] = useState<string[]>([
    "User1",
    "User2",
    "User3",
    "User4",
    "User5",
    "User6",
    "User7",
    "User8",
  ]);
  const [bookmarksUsers, setBookmarksUsers] = useState<string[]>([
    "UserA",
    "UserB",
    "UserC",
    "UserD",
    "UserE",
    "UserF",
    "UserG",
    "UserH",
  ]);
  const [commentsUsers, setCommentsUsers] = useState<string[]>([
    "Commenter1",
    "Commenter2",
    "Commenter3",
    "Commenter4",
    "Commenter5",
    "Commenter6",
    "Commenter7",
    "Commenter8",
  ]);

  const [isTouchDevice, setIsTouchDevice] = useState<boolean>();

  const fetchRatingsUsers = async () => {
    const response = await fetch("/api/v1");
    const data = await response.json();
    setRatingsUsers(data);
  };

  const fetchBookmarksUsers = async () => {
    const response = await fetch("/api/v1");
    const data = await response.json();
    setBookmarksUsers(data);
  };

  const fetchCommentsUsers = async () => {
    const response = await fetch("/api/v1");
    const data = await response.json();
    setCommentsUsers(data);
  };

  useEffect(() => {
    if (
      navigator.maxTouchPoints > 0 ||
      (navigator.maxTouchPoints !== undefined && navigator.maxTouchPoints > 0)
    ) {
      setIsTouchDevice(true);
    }
  }, []);

  return (
    <Card>
      <CardHeader className="py-4">
        <div className="w-full flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <Avatar
              className="w-10 h-10 cursor-pointer"
              onClick={() => alert("redirect to indiv provider screen")}
            >
              <AvatarImage
                className="aspect-square object-cover rounded-full"
                src={postAuthorAvatarSource}
                alt={alt}
              />
              <AvatarFallback>{alt}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-.5">
              <HoverCard>
                <HoverCardTrigger>
                  <h3
                    role="button"
                    className="text-md font-medium z-[1] w-max hover:underline underline-offset-2 cursor-pointer lg:max-w-[18rem] lg:truncate"
                    onClick={() => alert("Redirect to indiv provider screen")}
                  >
                    {postAuthorName}
                  </h3>
                </HoverCardTrigger>
                <HoverCardContent className="w-[25rem]">
                  <div className="flex justify-between space-x-4">
                    <Avatar
                      className="w-16 h-16 cursor-pointer"
                      onClick={() => alert("redirect to indiv provider screen")}
                    >
                      <AvatarImage
                        className="aspect-square object-cover rounded-full"
                        src={postAuthorAvatarSource}
                        alt={alt}
                      />
                      <AvatarFallback>{alt}</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h3
                        role="button"
                        className="text-lg font-medium z-[1] w-full hover:underline underline-offset-2 cursor-pointer lg:text-wrap"
                        onClick={() =>
                          alert("Redirect to indiv provider screen")
                        }
                      >
                        {postAuthorName}
                      </h3>
                      <p className="text-sm">
                        Insert provider description here if there is any.
                      </p>
                      <div className="flex items-center pt-2">
                        <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                        <span className="text-xs text-muted-foreground">
                          Joined [insert date here]
                        </span>
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>

              <p className="text-xs text-gray-500">{postAuthorEmail}</p>
            </div>
          </div>
          <div className="flex flex-col gap-1 items-center">
            {/* <Badge className="cursor-pointer">Trending</Badge> */}
            <a
              className="text-blue-500 text-sm hover:underline underline-offset-2"
              href="#"
              onClick={() => alert("Redirect to indiv post screen")}
            >
              View post
            </a>
          </div>
        </div>
      </CardHeader>
      <Separator className="mb-4" />
      <CardContent
        className="pb-4 cursor-pointer"
        onClick={() => alert("Redirect to indiv post screen")}
      >
        <div className="w-full flex flex-col gap-2">
          <div className="w-full flex flex-col gap-1">
            <div className="flex justify-between items-center">
              <h3
                className="text-lg font-bold"
                dangerouslySetInnerHTML={{ __html: postTitle }}
              ></h3>
            </div>
            <img
              src={postThumbnailSource}
              alt={`${postTitle} thumbnail`}
              className="w-full rounded-md object-cover max-h-[15rem] min-h-[15rem]"
            />
          </div>

          <div className="w-full flex flex-col gap-1">
            <p
              dangerouslySetInnerHTML={{ __html: postDescription }}
              className="text-sm text-gray-500 line-clamp-3"
            ></p>
          </div>
        </div>
      </CardContent>

      {!isTouchDevice ? (
        <div className="w-full h-12 flex justify-between items-center px-4 border-b">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <div className="flex cursor-pointer items-center hover:underline underline-offset-2">
                  <small>{postRatingCount} ratings</small>
                </div>
              </TooltipTrigger>
              <TooltipContent className="min-w-[6rem]">
                <ul>
                  {ratingsUsers.slice(0, 7).map((user, index) => (
                    <li key={index}>{user}</li>
                  ))}
                  {ratingsUsers.length > 7 && (
                    <li>{ratingsUsers.length - 7} more</li>
                  )}
                </ul>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <div className="flex gap-2 items-center">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <div className="flex cursor-pointer items-center hover:underline underline-offset-2">
                    <small>{postBookmarkCount} bookmarks</small>
                  </div>
                </TooltipTrigger>
                <TooltipContent className="min-w-[6rem]">
                  <ul>
                    {bookmarksUsers.slice(0, 7).map((user, index) => (
                      <li key={index}>{user}</li>
                    ))}
                    {bookmarksUsers.length > 7 && (
                      <li>{bookmarksUsers.length - 7} more</li>
                    )}
                  </ul>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <div className="flex cursor-pointer items-center hover:underline underline-offset-2">
                    <small>{postCommentCount} comments</small>
                  </div>
                </TooltipTrigger>
                <TooltipContent className="min-w-[6rem]">
                  <ul>
                    {commentsUsers.slice(0, 7).map((user, index) => (
                      <li key={index}>{user}</li>
                    ))}
                    {commentsUsers.length > 7 && (
                      <li>{commentsUsers.length - 7} more</li>
                    )}
                  </ul>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      ) : (
        <div className="w-full h-12 flex justify-between items-center px-4 border-b">
          <div className="flex items-center hover:underline underline-offset-2">
            <small>{postRatingCount} ratings</small>
          </div>

          <div className="flex gap-2 items-center">
            <div className="flex items-center hover:underline underline-offset-2">
              <small>{postBookmarkCount} bookmarks</small>
            </div>

            <div className="flex items-center hover:underline underline-offset-2">
              <small>{postCommentCount} comments</small>
            </div>
          </div>
        </div>
      )}

      <div className="w-full flex gap-1 items-center p-2">
        <Button className="w-full" variant="ghost">
          {" "}
          <Star className="mr-0.5 h-4" /> Rate
        </Button>
        <Button className="w-full" variant="ghost">
          <Bookmark className="mr-0.5 h-4" />
          Bookmark
        </Button>
        <Button className="w-full" variant="ghost">
          <Forward className="mr-0.5 h-4" />
          Share
        </Button>
      </div>
    </Card>
  );
};

export default PostSummaryCard;