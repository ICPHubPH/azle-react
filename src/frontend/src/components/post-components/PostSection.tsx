import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { dummyPosts } from "@/pages/landing/dummy-data";
import { Post } from "@/types/model";
import parse from "html-react-parser";
import { Mail } from "lucide-react";
import { toast } from "sonner";
import { Button } from "../ui/button";
import CustomHtmlParser from "./CustomHTMLParser";

export default function PostSection() {
  const post = dummyPosts[0];

  return (
    <div className="min-h-96 w-full h-full border px-8 py-4 rounded-lg">
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
    <div className="w-full h-full relative border-2 rounded-t-lg">
      <img
        src={post.postThumbnailSource}
        alt={post.postTitle}
        className="object-cover w-full h-full aspect-video rounded-t-md"
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
      <h1 className="text-3xl font-extrabold tracking-tight lg:text-3xl z-20 absolute bottom-4 left-4">
        {parse(post.postTitle)}
      </h1>
    </div>
  );
}

function MetaDataGroup({ post }: { post: Post }) {
  return (
    <div className="w-full flex justify-between items-center py-4 px-8 bg-gradient-to-r from-blue-800 to-purple-800">
      <div className="flex items-center gap-4">
        <Avatar className="w-12 h-12">
          <AvatarImage src={post.avatarSource} />
          <div className="h-full w-full absolute inset-0 hover:bg-black/40" />
          <AvatarFallback>ED</AvatarFallback>
        </Avatar>
        <div className="h-full flex flex-col justify-between gap-1 min-w-52">
          <p className="text-base font-medium leading-none cursor-pointer hover:underline text-white">
            {post.name}
          </p>
          <p className="text-sm text-muted-foreground cursor-pointer hover:underline">
            {post.email}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-1 items-end justify-start">
        {/* <p className="text-sm font-medium flex gap-1 items-center">
          <CalendarDays /> {post.postDate}
        </p> */}
        {/* <Button variant={null} size={null}>
          <Badge variant={"default"}>{post.postType}</Badge>
        </Button> */}
        <Button
          variant={"default"}
          className="flex gap-2 font-normal bg-blue-600 text-white"
        >
          <Mail className="h-4 w-4" />
          Contact
        </Button>
      </div>
    </div>
  );
}

// function PostContent() {
//     return (
//       <div className="py-4">
//         <h3 className="text-lg font-semibold mb-2">Description</h3>
//         <p className="text-gray-600 mb-6 ">
//           The Future Leaders Scholarship is designed to support exceptional
//           students who demonstrate outstanding leadership potential and a
//           commitment to community service. This prestigious award covers full
//           tuition and provides mentorship opportunities to help shape the next
//           generation of visionary leaders.
//         </p>
//         <div className="grid md:grid-cols-2 gap-6">
//           <div>
//             <h3 className="text-lg font-semibold mb-2 flex items-center">
//               <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
//               Eligibility
//             </h3>
//             <ul className="list-disc list-inside text-gray-600 space-y-2">
//               <li>Minimum GPA of 3.5</li>
//               <li>Demonstrated leadership experience</li>
//               <li>Active community involvement</li>
//               <li>Incoming freshman or transfer student</li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="text-lg font-semibold mb-2 flex items-center">
//               <GraduationCap className="mr-2 h-5 w-5 text-blue-500" />
//               Application Process
//             </h3>
//             <ol className="list-decimal list-inside text-gray-600 space-y-2">
//               <li>Complete online application form</li>
//               <li>Submit academic transcripts</li>
//               <li>Provide two letters of recommendation</li>
//               <li>Write a 500-word personal statement</li>
//             </ol>
//           </div>
//         </div>
//       </div>
//     );
//   }
