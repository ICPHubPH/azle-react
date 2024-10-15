
"use client";
import PostSummaryCard, {
  PostSummaryCardProps,
} from "@/components/post-summary/PostSummaryCard";
import Header from "@/components/student-component/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlusCircle, Search } from "lucide-react";
import { useState } from "react";
import { dummyPosts } from "../landing/dummy-data";

export default function ScholarshipsFeed() {
  const [posts, setPosts] = useState<PostSummaryCardProps[]>();
  const [activeTab, setActiveTab] = useState<
    "all" | "scholarship" | "internship"
  >("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<"latest" | "oldest">("latest");

  const filteredPosts = dummyPosts
    .filter((post) => activeTab === "all" || post.postType === activeTab)
    .filter(
      (post) =>
        post.postTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.postDescription.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) =>
      sortOrder === "latest"
        ? new Date(b.postDate).getTime() - new Date(a.postDate).getTime()
        : new Date(a.postDate).getTime() - new Date(b.postDate).getTime()
    );

  const handleCreatePost = () => {
    console.log("Create post clicked");
  };

  return (
    <>
      <Header />
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Scholarship Feed</h1>
          <Button onClick={handleCreatePost}>
            <PlusCircle className="mr-2 h-4 w-4" /> Create Post
          </Button>
        </div>

        <Tabs
          value={activeTab}
          onValueChange={(value) => setActiveTab(value as typeof activeTab)}
        >
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="scholarship">Scholarships</TabsTrigger>
            <TabsTrigger value="internship">Internships</TabsTrigger>
          </TabsList>

          <div className="flex space-x-4 mb-6">
            <div className="relative flex-grow">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-8"
              />
            </div>
            <Select
              value={sortOrder}
              onValueChange={(value) =>
                setSortOrder(value as "latest" | "oldest")
              }
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="latest">Latest</SelectItem>
                <SelectItem value="oldest">Oldest</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <PostSummaryCard
                  postId={post.id}
                  postAuthorEmail={post.email}
                  postAuthorAvatarSource={post.avatarSource}
                  postTitle={post.postTitle}
                  postThumbnailSource={post.postThumbnailSource}
                  postDescription={post.postDescription}
                  postRatingCount={post.postRatingCount}
                  postBookmarkCount={post.postBookmarkCount}
                  postAuthorName={post.name}
                  postCommentCount={post.postCommentCount}
                  postType={post.postType}
                  postDate={post.postDate}
                />

              ))}
            </div>
          </TabsContent>
          <TabsContent value="scholarship" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts
                .filter((post) => post.postType === "scholarship")
                .map((post) => (
                  <PostSummaryCard
                    postId={post.id}
                    postAuthorEmail={post.email}
                    postAuthorAvatarSource={post.avatarSource}
                    postTitle={post.postTitle}
                    postThumbnailSource={post.postThumbnailSource}
                    postDescription={post.postDescription}
                    postRatingCount={post.postRatingCount}
                    postBookmarkCount={post.postBookmarkCount}
                    postAuthorName={post.name}
                    postCommentCount={post.postCommentCount}
                    postType={post.postType}
                    postDate={post.postDate}
                  />
                ))}
            </div>
          </TabsContent>
          <TabsContent value="internship" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts
                .filter((post) => post.postType === "internship")
                .map((post) => (
                  <PostSummaryCard
                    postId={post.id}
                    postAuthorEmail={post.email}
                    postAuthorAvatarSource={post.avatarSource}
                    postTitle={post.postTitle}
                    postThumbnailSource={post.postThumbnailSource}
                    postDescription={post.postDescription}
                    postRatingCount={post.postRatingCount}
                    postBookmarkCount={post.postBookmarkCount}
                    postAuthorName={post.name}
                    postCommentCount={post.postCommentCount}
                    postType={post.postType}
                    postDate={post.postDate}
                  />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}