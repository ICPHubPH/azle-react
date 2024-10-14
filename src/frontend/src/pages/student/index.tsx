import React from "react";
import Header from "@/components/student-component/Header";
import UpperContent from "@/components/student-component/UpperContent";
import PostSummaryCard from "@/components/post-summary/PostSummaryCard";
import { dummyPosts, dummyTopProviders } from "../landing/dummy-data";
import TopProviderCard from "@/components/homepage/top-providers/TopProviderCard";

const StudentPage: React.FC = () => {
  return (
    <div className="">
      <Header/>

      <div className="container mx-auto px-4">
        <UpperContent />
      </div>

      {/* Center the posts */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4 justify-center items-center">
          {dummyPosts.map((post) => (
            <PostSummaryCard
              key={post.email}
              postAuthorEmail={post.email}
              postAuthorName={post.name}
              postAuthorAvatarSource={post.avatarSource}
              postTitle={post.postTitle}
              postThumbnailSource={post.postThumbnailSource}
              postDescription={post.postDescription}
              postRatingCount={post.postRatingCount}
              postBookmarkCount={post.postBookmarkCount}
              postCommentCount={post.postCommentCount} postType={""} postDate={""}            />
          ))}
        </div>
      </div>

      {/* Center the top providers */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4 justify-center items-center">
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
