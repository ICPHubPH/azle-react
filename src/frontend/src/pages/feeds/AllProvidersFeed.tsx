"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PlusCircle, Search } from "lucide-react";
import Header from "@/components/student-component/Header";
import TopProviderCard from "@/components/provider-component/top-providers/TopProviderCard";
import { dummyTopProviders } from "../landing/dummy-data";

export default function ProvidersFeed() {
  const [activeTab, setActiveTab] = useState<"all" | "school" | "corporate" | "government">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<"latest" | "oldest">("latest");

  const filteredProviders = dummyTopProviders
    .filter((provider) => activeTab === "all" || provider.type.toLowerCase() === activeTab)
    .filter(
      (provider) =>
        provider.provider.toLowerCase().includes(searchQuery.toLowerCase()) ||
        provider.description.toLowerCase().includes(searchQuery.toLowerCase())
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
              {filteredProviders.map((provider) => (
                <TopProviderCard
                  key={provider.id}
                  thumbnail={provider.thumbnail}
                  avatar={provider.avatar}
                  provider={provider.provider}
                  description={provider.description}
                  scholarship={provider.scholarship}
                  id={provider.id}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="school" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProviders
                .filter((provider) => provider.type.toLowerCase() === "school")
                .map((provider) => (
                  <TopProviderCard
                    key={provider.id}
                    thumbnail={provider.thumbnail}
                    avatar={provider.avatar}
                    provider={provider.provider}
                    description={provider.description}
                    scholarship={provider.scholarship}
                    id={provider.id}
                  />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="corporate" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProviders
                .filter((provider) => provider.type.toLowerCase() === "corporate")
                .map((provider) => (
                  <TopProviderCard
                    key={provider.id}
                    thumbnail={provider.thumbnail}
                    avatar={provider.avatar}
                    provider={provider.provider}
                    description={provider.description}
                    scholarship={provider.scholarship}
                    id={provider.id}
                  />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="government" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProviders
                .filter((provider) => provider.type.toLowerCase() === "government")
                .map((provider) => (
                  <TopProviderCard
                    key={provider.id}
                    thumbnail={provider.thumbnail}
                    avatar={provider.avatar}
                    provider={provider.provider}
                    description={provider.description}
                    scholarship={provider.scholarship}
                    id={provider.id}
                  />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
