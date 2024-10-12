import React from "react";
import Header from "@/components/student/Header";
import UpperContent from "@/components/student/UpperContent";
import PostSummaryCard from "@/components/post-summary/PostSummaryCard";
import { dummyPosts, dummyTopProviders } from "../landing/dummy-data";
import TopProviderCard from "@/components/homepage/top-providers/TopProviderCard";

const StudentPage: React.FC = () => {
  return (
    <div className="">
      <Header />

      <div className="container mx-auto px-4">
        <UpperContent />
      </div>

      {/* Center the posts */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4 justify-center items-center">
          {dummyPosts.map((post) => (
            <PostSummaryCard
              key={post.email} // Add a unique key for each mapped item
              postAuthorEmail={post.email}
              postAuthorAvatarSource={post.avatarSource}
              postTitle={post.postTitle}
              postThumbnailSource={post.postThumbnailSource}
              postDescription={post.postDescription}
              postRatingCount={post.postRatingCount}
              postBookmarkCount={post.postBookmarkCount}
              postCommentCount={post.postCommentCount}
            />
          ))}
        </div>
      </div>

      {/* Center the top providers */}
      <div className="flex flex-col gap-4 items-center container mx-auto mt-6">
        <h1 className="text-2xl font-bold">Test Posts</h1>
        <div className="w-full px-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-8 lg:grid-cols-3">
          {dummyTopProviders.map((provider, index) => (
            <TopProviderCard
              key={index}
              thumbnail={provider.thumbnail}
              avatar={provider.avatar}
              provider={provider.provider}
              description={provider.description}
              scholarship={provider.scholarship}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentPage;
