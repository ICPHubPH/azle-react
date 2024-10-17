import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { dummyPosts } from "@/components/data/dummy-data";
import { Post } from "@/types/model";
import parse from "html-react-parser";
import { Mail } from "lucide-react";
import { toast } from "sonner";
import CustomHtmlParser from "./CustomHTMLParser";
import { Button } from "@/components/ui/button";

export default function PostSection() {
  const post = dummyPosts[0];

  return (
    <div className="w-full h-full border px-4 py-4 rounded-lg  md:px-8">
      <PostFrontGroup post={post} />
      <MetaDataGroup post={post} />
      <div className="py-4">
        {<CustomHtmlParser htmlContent={dummyPosts[1].postDescription} />}
      </div>
    </div>
  );
}

function PostFrontGroup({ post }: { post: Post }) {
  return (
    <div className="relative w-full h-full   ">
      <img
        src={post.postThumbnailSource}
        alt={post.postTitle}
        className="object-cover w-full h-[200px] md:h-[300px] aspect-video rounded-t-lg"
      />
      <Button
        variant={null}
        size={null}
        className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent hover:backdrop-blur-sm transition-all ease-in-out duration-100"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          toast.info("Thumbnail fullscreen view");
        }}
      />
      <h1 className="text-xl md:text-3xl font-extrabold tracking-tight z-20 absolute bottom-4 left-4 ">
        {parse(post.postTitle)}
      </h1>
    </div>
  );
}

function MetaDataGroup({ post }: { post: Post }) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center py-4 px-4 md:px-8 bg-gradient-to-r from-blue-800 to-purple-800 rounded-b-lg">
      <div className="flex items-center gap-4">
        <Avatar className="w-12 h-12">
          <AvatarImage src={post.avatarSource} />
          <div className="h-full w-full absolute inset-0 hover:bg-black/40" />
          <AvatarFallback>ED</AvatarFallback>
        </Avatar>
        <div className="flex flex-col justify-between gap-1">
          <p className="text-base font-medium leading-none cursor-pointer hover:underline text-white">
            {post.name}
          </p>
          <p className="text-sm text-muted-foreground cursor-pointer hover:underline">
            {post.email}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-1 items-end pt-5 md:pt-0 justify-start w-full">

        <Button
          variant={"default"}
          className="flex gap-2 font-normal bg-blue-700 text-white hover:bg-gray-800 "
        >
          <Mail className="h-4 w-4" />
          Contact
        </Button>
      </div>
    </div>
  );
}
