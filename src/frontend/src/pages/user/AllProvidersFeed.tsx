"use client";

import { useState } from "react"; 
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PlusCircle, Search } from "lucide-react";
import Header from "@/components/header/user-header/Header";
import TopProviderCard from "@/components/provider-component/top-providers/TopProviderCard";
import { SkeletonCard } from "@/components/ui/skeleton"; 
import { useUserByProviders } from "@/hooks/useUserData"; // Import your custom hook
import { User } from "@/types/model";

export default function ProvidersFeed() {
  const [activeTab, setActiveTab] = useState<"all" | "school" | "corporate" | "government">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<"latest" | "oldest">("latest");
  const [page, setPage] = useState(1); // Current page
  const take = 10; // Items per page

  // Use custom hook to fetch providers
  const { data, isLoading } = useUserByProviders(page, take);

  // Filter providers based on tab and search query
  const filteredProviders = data?.providers.filter((provider: { type: string; name: string; bio: string; }) => 
    (activeTab === "all" || provider.type.toLowerCase() === activeTab) &&
    (provider.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    provider.bio.toLowerCase().includes(searchQuery.toLowerCase()))
  ) || [];

  return (
    <>
      <Header />
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Providers Feed</h1>
        </div>

        <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as "all" | "school" | "corporate" | "government")}>
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
            <Select value={sortOrder} onValueChange={(value) => setSortOrder(value as "latest" | "oldest")}>
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
              {isLoading
                ? Array.from({ length: 6 }).map((_, index) => <SkeletonCard key={index} />)
                : filteredProviders.map((provider: User) => (
                    <TopProviderCard key={provider.id} provider={provider} />
                  ))}
            </div>
          </TabsContent>

          {/* Similar structure for the other tabs (school, corporate, government) */}
        </Tabs>
      </div>
    </>
  );
}
