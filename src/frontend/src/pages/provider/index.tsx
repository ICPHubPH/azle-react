import PostSummaryCard from "@/components/post/post-summary/PostSummaryCard";
import Header from "@/components/provider-component/Header";
import FormPost from "@/components/post/FormPost";
import React from "react";
import { dummyPosts, dummyTopProviders } from "../landing/dummy-data";

import TopProviderCard from "@/components/provider-component/top-providers/TopProviderCard";

// import { useAuth } from "@/context/AuthContext";

const ProviderPage: React.FC = () => {
  //   const { user } = useAuth(); // Access user info to check role

  return (
    <div className="">
      <Header />

      <div className="container mx-auto px-4">
        <FormPost />
      </div>

      {/* Conditional rendering for providers to create posts */}
      {/* {user?.role === 'provider' && (
        <div className="container mx-auto px-4 my-4">
          <CreatePost />
        </div>
      )} */}

      {/* Center the posts */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4 justify-center items-center">
          {dummyPosts.map((post) => (
            <PostSummaryCard
              key={post.email}
              postId={post.id}
              postAuthorEmail={post.email}
              postAuthorName={post.name}
              postAuthorAvatarSource={post.avatarSource}
              postTitle={post.postTitle}
              postThumbnailSource={post.postThumbnailSource}
              postDescription={post.postDescription}
              postRatingCount={post.postRatingCount}
              postBookmarkCount={post.postBookmarkCount}
              postCommentCount={post.postCommentCount}
              postType={""}
              postDate={""}
            />
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
              id={""}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProviderPage;
