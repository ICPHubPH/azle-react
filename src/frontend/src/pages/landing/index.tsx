import React from "react";
import Header from "../../components/Header";
import { Separator } from "@/components/ui/separator";
import Testimonies from "@/components/landing/testimonies/Testimonies";
import Providers from "@/components/landing/donor/Providers";
import PostSummary from "@/components/post-summary/PostSummary";

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
    </div>
  );
};

export default Home;
