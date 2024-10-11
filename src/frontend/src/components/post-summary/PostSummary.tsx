import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

interface PostSummaryProps {
  postAuthorEmail: string;
  postAuthorAvatarSource: string;
  postTitle: string;
  postThumbnailSource: string;
  postDescription: string;
  postRatingCount: number;
  postBookmarkCount: number;
  postCommentCount: number;
}

const PostSummary: React.FC<PostSummaryProps> = ({
  postAuthorEmail,
  postAuthorAvatarSource,
  postTitle,
  postThumbnailSource,
  postDescription,
  postRatingCount,
  postBookmarkCount,
  postCommentCount,
}) => {
  const alt = `@${postAuthorEmail.split("@")[0]}`;

  return (
    <Card className="w-[90.5%] md:w-[90.5%] lg:w-[90.0%] mx-auto my-[2rem] ">
      <CardHeader className="py-4">
        <div className="w-full flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <Avatar className="w-10 h-10">
              <AvatarImage
                className="aspect-square object-cover rounded-full"
                src={postAuthorAvatarSource}
                alt={alt}
              />
              <AvatarFallback>{alt}</AvatarFallback>
            </Avatar>

            <div className="flex flex-col gap-.5">
              <h3
                role="button"
                className="text-md font-medium z-[1] w-max hover:underline underline-offset-2 cursor-pointer"
                onClick={() => alert('Redirect to indiv provider screen')}
              >
                {alt}
              </h3>
              <p className="text-xs text-gray-500">{postAuthorEmail}</p>
            </div>
          </div>
          <div className="flex flex-col gap-1 items-center">
            <Badge className="cursor-pointer">Trending</Badge>
            <a
              className="text-blue-500 text-sm hover:underline underline-offset-2"
              href="#"
              onClick={() => alert('Redirect to indiv post screen')}
            >
              View post
            </a>
          </div>
        </div>
      </CardHeader>
      <Separator className="mb-4" />
      <CardContent className="pb-4">
        <div className="w-full flex flex-col gap-2">
          <div className="w-full flex flex-col gap-1">
            <div className="flex justify-between items-center">
              <h3 className="text-md font-medium">{postTitle}</h3>
            </div>
            <img
              src={postThumbnailSource}
              alt={`${postTitle} thumbnail`}
              onClick={() => alert('Redirect to indiv post screen')}
              className="w-full rounded-md object-cover max-h-[15rem] cursor-pointer"
            />
          </div>

          <div className="w-full flex flex-col gap-1">
            <p className="text-xs text-gray-500 line-clamp-2">
              {postDescription}
            </p>
          </div>
        </div>
      </CardContent>

      <div className="w-full h-12 rounded-b-md flex justify-between items-center px-4 border-t">
        <div className="flex cursor-pointer items-center hover:underline underline-offset-2">
          <small>{postRatingCount} ratings</small>
          {/* <Star className="w-4" /> */}
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex cursor-pointer items-center hover:underline underline-offset-2">
            <small>{postBookmarkCount} bookmarks</small>
            {/* <Bookmark className="w-4" /> */}
          </div>
          <div className="flex cursor-pointer items-center hover:underline underline-offset-2">
            <small>{postCommentCount} comments</small>
            {/* <MessageSquare className="w-4" /> */}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PostSummary;
