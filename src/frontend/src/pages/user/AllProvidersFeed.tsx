import { useState, useEffect } from "react"; 
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";
import Header from "@/components/header/user-header/Header";
import TopProviderCard from "@/components/provider-component/top-providers/TopProviderCard";
import { SkeletonCard } from "@/components/ui/skeleton"; 
import { User } from "@/types/model";
import { getAllProviders } from "@/api/userService"; // Import your userService

export default function ProvidersFeed() {
  const [activeTab, setActiveTab] = useState<"all" | "school" | "corporate" | "government">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<"latest" | "oldest">("latest");

  const [loading, setLoading] = useState(true);
  const [providers, setProviders] = useState<User[]>([]); // State for providers

  

  useEffect(() => {
    const fetchProviders = async () => {
      setLoading(true);
      try {
        // Fetch providers based on tab and sortOrder (filtering can also be done in backend)
        const response = await getAllProviders( 1, 10); // Pass filters to your API
        setProviders(response.providers); // Adjust based on your API response
      } catch (error) {
        console.error("Failed to fetch providers:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProviders();
  }, [activeTab, sortOrder, searchQuery]); // Trigger when tab, sort order or search query changes

  const filteredProviders: User[] = providers
  .filter((provider) => 
    activeTab === "all" || (provider.type && provider.type.toLowerCase() === activeTab) // Add null check for provider.type
  )
  .filter((provider) =>
    provider.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (provider.bio && provider.bio.toLowerCase().includes(searchQuery.toLowerCase())) // Add null check for provider.bio
  );


  return (
    <>
      <Header />
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Providers Feed</h1>
        </div>

        <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as typeof activeTab)}>
          <TabsList className="grid w-full grid-cols-4 mb-6">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="school">Schools</TabsTrigger>
            <TabsTrigger value="corporate">Companies</TabsTrigger>
            <TabsTrigger value="government">Government</TabsTrigger>
          </TabsList>

          <div className="flex space-x-4 mb-6">
            <div className="relative flex-grow">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search providers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-8"
              />
            </div>
            <Select
              onValueChange={(value) => setSortOrder(value as "latest" | "oldest")}
            >
              <SelectTrigger>
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
              {loading
                ? Array.from({ length: 6 }).map((_, index) => <SkeletonCard key={index} />)
                : filteredProviders.map((provider) => (
                    <TopProviderCard key={provider.id} provider={provider} />
                  ))}
            </div>
          </TabsContent>

          {/* Repeat TabsContent for school, corporate, government as needed */}
        </Tabs>
      </div>
    </>
  );
}
