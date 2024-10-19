import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PostSection from "@/components/post/post-components/PostSection";
import ReviewSection from "@/components/post/post-components/ReviewSection";
import { Button } from "@/components/ui/button";
import { MoveLeft } from "lucide-react";
import Header from "@/components/header/user-header/Header";
import { getPostById } from "@/api/postService"; 
import { Post } from "@/types/model"; 
import { toast } from "sonner";

export default function PostPage() {
  
  const { postId } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      if (!postId) {
        setError("Post ID is required.");
        setLoading(false);
        return;
      }

      try {
        const data = await getPostById(postId); 
        setPost(data.post);
      } catch (error) {
        setError("Error fetching post information.");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [postId]);

  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="flex items-center justify-center h-screen">{error}</div>;
  }

  const handleBack = () => {
    navigate(-1); // Navigate back to the previous page
    toast.info("Back to feed"); // Show toast notification
  };

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center pt-4">
        <div className="flex justify-start w-full px-36 mb-4 ">
          <Button
            variant={null}
            size={"lg"}
            className="flex gap-2 px-0"
            onClick={handleBack} // Call handleBack on button click
          >
            <MoveLeft />
            Back to feed
          </Button>
        </div>
        <div className="flex justify-center items-start gap-4 w-[80%] pb-10 flex-col md:flex-col lg:flex-row ">
  {post ? (
    <>
      <PostSection post={post} />
      <ReviewSection feedbacks={post.feedbacks} />
    </>
  ) : (
    <div>No post available.</div>
  )}
</div>

      </div>
    </>
  );
}
