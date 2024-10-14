import React from "react";
import { Separator } from "@/components/ui/separator";
import Testimonies from "@/components/landing/testimonies/Testimonies";
import Providers from "@/components/landing/donor/Providers";
import Header from "@/components/landing/Header";
import {
  dummyFeedbacks,
  dummyPosts,
  dummyTopProviders,
  dummyUsers,
} from "./dummy-data";
import CreatePost from "@/components/post-form/CreatePost";
import TopProviderCard from "@/components/provider-component/top-providers/TopProviderCard";
import PostSummaryCard from "@/components/post-summary/PostSummaryCard";
import Review from "@/components/review/Feedback";
import Feedback from "@/components/review/Feedback";
import Footer from "@/components/footer/Footer";

const Home: React.FC = () => {
  return (
    <div className="scroll-smooth">
      <Header />
      <div
        className="flex flex-col items-center justify-center h-screen"
        id="home"
      >
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold">
          Welcome to{" "}
          <span className="text-7xl font-bold dark:text--200 bg-gradient-to-r from-[#0038a9] via-[#ce1127] to-[#f5ce31] bg-clip-text text-transparent">
            ConnectED
          </span>
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
      <div className="flex flex-col gap-4 items-center container mx-auto">
        <h1 className="text-2xl font-bold">Test Posts</h1>
        <div className="px-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-8 lg:grid-cols-3">
          {dummyPosts.map((post) => (
            <PostSummaryCard
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
      </div>

      {/* test only for top providers */}

      <div className="flex flex-col gap-4 items-center container mx-auto mt-6">
        <h1 className="text-2xl font-bold">Providers</h1>
        <div className="w-full px-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-8 lg:grid-cols-3">
          {dummyTopProviders.map((provider, index) => (
            <TopProviderCard
              key={index}
              thumbnail={provider.thumbnail}
              avatar={provider.avatar}
              provider={provider.provider}
              description={provider.description}
              scholarship={provider.scholarship} id={""}            />
          ))}
        </div>
      </div>

      <CreatePost />

      {/* TEST FEEDBACKS */}
      <div className="flex flex-col gap-4 items-center container mx-auto mt-6">
        <h1 className="text-2xl font-bold">Test Feedbacks</h1>
        <div className="w-full px-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-8 lg:grid-cols-3">
          {dummyFeedbacks.map((feedback, index) => (
            <Feedback user={dummyUsers[index]} feedback={feedback} />
          ))}
        </div>
      </div>

      {/*test footer */}

      <Footer />
    </div>

    
  );
};

export default Home;
