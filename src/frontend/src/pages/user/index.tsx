import React, { useEffect, useState } from "react";
import Header from "@/components/header/user-header/Header";
import UpperContent from "@/components/user/UpperContent";
import PostForm from "@/components/post/FormPost";
import TopProviderCard from "@/components/provider-component/top-providers/TopProviderCard";
import RightCardSide from "@/components/user/RightCardSide";
import LeftCardSide from "@/components/user/LeftCardSide";
import { ArrowUp } from "lucide-react";
import { getAllProviders } from "@/api/userService"; // Import your service function
import type { User } from "@/types/model"; // Ensure you import User as an interface

const User: React.FC = () => {
  const [providers, setProviders] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const fetchProviders = async () => {
      setLoading(true); // Set loading to true when starting to fetch
      const activeTab = "all"; // Set according to your active tab logic
      const sortOrder = "asc"; // Set according to your sorting logic
      const searchQuery = ""; // Set according to your search input
      const page = 1; // Set your pagination page
      const take = 10; // Set the number of providers to fetch
    
      try {
        const response = await getAllProviders( page, take);
        setProviders(response.providers); // Update this line to get providers from response
      } catch (error) {
        setError("Failed to load providers."); // Generic error message
      } finally {
        setLoading(false); // Ensure loading is set to false when done
      }
    };
    

    fetchProviders();
  }, []);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;

      if (scrollTop + clientHeight >= scrollHeight * 0.9) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Header />
      <div className="flex flex-row w-full container mx-auto px-4">
        <div className="hidden lg:block">
          <LeftCardSide />
        </div>

        <div className="flex flex-col">
          <div className="container mx-auto px-4">
            <UpperContent />
          </div>
          <div className="container mx-auto px-4">
            <PostForm />
          </div>

          <div className="container mx-auto px-4 py-10">
            <h1 className="text-2xl font-bold">Top Providers</h1>
            {loading ? (
              <p>Loading providers...</p>
            ) : error ? (
              <p>{error}</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 justify-center items-center pt-10">
                {providers.map((provider) => (
                  <TopProviderCard key={provider.id} provider={provider} />
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="hidden lg:block">
          <RightCardSide />
        </div>
      </div>

      {showScrollToTop && (
        <button onClick={scrollToTop} className="fixed bottom-8 right-8 p-3">
          <ArrowUp className="h-6 w-6" />
        </button>
      )}
    </>
  );
};

export default User;
