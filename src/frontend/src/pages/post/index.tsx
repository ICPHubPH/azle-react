import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PostSection from "@/components/post/post-components/PostSection";
import ReviewSection from "@/components/post/post-components/ReviewSection";
import { Button } from "@/components/ui/button";
import { MoveLeft, Share2, Bookmark, ThumbsUp } from "lucide-react";
import Header from "@/components/header/user-header/Header";
import { getPostById } from "@/api/postService"; 
import { Post } from "@/types/model"; 
import { toast } from "sonner";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

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

  const handleBack = () => {
    navigate(-1);
    toast.info("Back to feed");
  };

  const handleShare = () => {
    // Implement share functionality
    toast.success("Post shared successfully!");
  };

  const handleBookmark = () => {
    // Implement bookmark functionality
    toast.success("Post bookmarked!");
  };

  const handleLike = () => {
    // Implement like functionality
    toast.success("Post liked!");
  };

  if (loading) {
    return <LoadingSkeleton />;
  }

  if (error) {
    return <ErrorState error={error} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center gap-2"
            onClick={handleBack}
          >
            <MoveLeft className="h-4 w-4" />
            Back to feed
          </Button>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={handleShare}>
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
            <Button variant="outline" size="sm" onClick={handleBookmark}>
              <Bookmark className="h-4 w-4 mr-2" />
              Save
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {post ? <PostSection post={post} /> : <div>No post available.</div>}
          </div>
          <div>
            <Card>
              <CardContent className="p-6">
              
                {post ? (
                  <ReviewSection feedbacks={post.feedbacks} />
                ) : (
                  <div>No reviews available.</div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}

function LoadingSkeleton() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-4">
        <Skeleton className="h-8 w-32" />
        <Skeleton className="h-[300px] w-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </div>
      </div>
    </div>
  );
}

function ErrorState({ error }: { error: string }) {
  return (
    <div className="flex items-center justify-center h-screen">
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-2">Error</h2>
          <p className="text-muted-foreground">{error}</p>
        </CardContent>
      </Card>
    </div>
  );
}