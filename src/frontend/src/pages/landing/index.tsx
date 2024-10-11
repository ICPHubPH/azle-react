import React from "react";
import { Separator } from "@/components/ui/separator";
import Testimonies from "@/components/landing/testimonies/Testimonies";
import Providers from "@/components/landing/donor/Providers";
import Header from "@/components/landing/Header";
import TopProviders from "@/components/homepage/top-providers/top-providers";
import { dummyPosts } from "./dummy-data";
import PostSummary from "@/components/post-summary/PostSummary";
import CreatePost from "@/components/post-form/CreatePost";

const Home: React.FC = () => {
  return (
    <div className="scroll-smooth">
      <Header />
      <div
        className="flex flex-col items-center justify-center h-screen"
        id="home"
      >
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold text-blue-500 dark:text-yellow-500">
          Welcome to ISKOLAR PH!
        </h1>
        <p className="text-lg text-gray-800 dark:text-gray-200">
          Connecting students and providers for quality education.
        </p>
      </div>
      <Separator />
      <div className="container mx-auto px-4" id="testimonies">
        <Testimonies />
      </div>
      <Separator />
      <div className="container mx-auto px-4" id="providers">
        <Providers />
      </div>

      {/** TEST POST ONLY */}
      <div className="flex flex-col gap-4 items-center border-red-500 border container mx-auto">
        <h1 className="text-2xl font-bold">Test Posts</h1>
        <div className="px-4 grid grid-cols-3 gap-8">
          {dummyPosts.map((post) => (
            <PostSummary
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

      {/* test only for top providers */}
      <div className="container mx-auto px-4">
        <TopProviders />
      </div>

      <CreatePost />
    </div>
  );
};

export default Home;
