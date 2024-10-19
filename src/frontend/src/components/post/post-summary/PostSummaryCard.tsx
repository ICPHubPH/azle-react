import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { toast } from "@/hooks/use-toast";
import { useEffect, useState } from "react";
import { Bookmark, CalendarDays, Forward, Star } from "lucide-react";
import { Post } from '@/types/model';
import { useNavigate } from "react-router-dom";

const PostSummaryCard: React.FC<{ post: Post }> = ({ post }) => {
  const navigate = useNavigate();

  const { id, user, type, createdAt, thumbnail, title, content, feedbacks } = post;

  // comment count is just the number of feedbacks that have a content
  const commentCount = feedbacks.filter((feedback) => feedback.content).length;

  const [ratingsUsers, setRatingsUsers] = useState<string[]>([]);
  const [bookmarksUsers, setBookmarksUsers] = useState<string[]>([]);
  const [commentsUsers, setCommentsUsers] = useState<string[]>([]);

  const [isTouchDevice, setIsTouchDevice] = useState<boolean>(false);
  const [ratingValue, setRatingValue] = useState(0);
  const [ratingComment, setRatingComment] = useState("");

  useEffect(() => {
    const checkTouchDevice = () => {
      if (
        navigator.maxTouchPoints > 0 ||
        (navigator.maxTouchPoints !== undefined && navigator.maxTouchPoints > 0)
      ) {
        setIsTouchDevice(true);
      }
    };
    checkTouchDevice();
  }, []);

  const handleRating = () => {
    // Here you would typically send the rating to your backend
    console.log(
      `Submitted rating ${ratingValue} for post ${id} with comment: ${ratingComment}`
    );
    toast({
      title: "Rating Submitted",
      description: "Thank you for your feedback!",
    });
  };

  const handleBookmark = () => {
    // Here you would typically toggle the bookmark status in your backend
    toast({
      title: "Bookmark Added",
      description: "This post has been bookmarked.",
    });
  };

  const handleShare = (type: "copy" | "facebook") => {
    if (type === "copy") {
      navigator.clipboard.writeText(`https://yourwebsite.com/posts/${id}`);
      toast({
        title: "Link Copied",
        description: "Post link has been copied to clipboard.",
      });
    } else if (type === "facebook") {
      console.log(`Sharing post ${id} on Facebook`);
    }
  };

  return (
    <Card className="bg-primary-foreground">
      <CardHeader className="py-4">
        <div className="w-full flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <Avatar className="w-10 h-10 cursor-pointer">
              <AvatarImage
                className="aspect-square object-cover rounded-full"
                src={user.avatar}
                alt={user.name}
              />
              <AvatarFallback>{user.name}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-.5">
              <HoverCard>
                <HoverCardTrigger>
                  <h3
                    role="button"
                    className="text-md font-medium z-[1] max-w-[10rem] truncate hover:underline underline-offset-2 cursor-pointer md:max-w-[12rem] xl:max-w-[14rem] 2xl:max-w-[18rem]"
                    onClick={() => alert("Redirect to individual provider screen")}
                  >
                    {user.name}
                  </h3>
                </HoverCardTrigger>
                <HoverCardContent>
                  <div className="flex flex-col">
                    <p className="text-muted-foreground text-sm">
                      {type.charAt(0).toUpperCase() + type.slice(1)} |{" "}
                      {new Date(createdAt).toLocaleDateString()}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {commentCount} Comments
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant="outline">Actions</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={handleBookmark}>
                Bookmark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleShare("copy")}>
                Share Link
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleShare("facebook")}>
                Share on Facebook
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent>
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-48 object-cover rounded-md"
        />
        <h2 className="mt-2 text-lg font-semibold">{title}</h2>
        <p className="text-sm text-muted-foreground mt-1">{content}</p>

        <Separator className="my-4" />

        <div className="flex justify-between items-center">
          <Button variant="outline" onClick={() => setRatingValue(5)}>
            Rate
          </Button>
          <Button onClick={handleRating}>Submit Rating</Button>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Leave Feedback</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Leave Feedback</DialogTitle>
              <DialogDescription>
                Please leave your comments and rating.
              </DialogDescription>
            </DialogHeader>
            <Textarea
              placeholder="Your feedback..."
              value={ratingComment}
              onChange={(e) => setRatingComment(e.target.value)}
            />
            <Button onClick={handleRating}>Submit</Button>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
};

export default PostSummaryCard;
