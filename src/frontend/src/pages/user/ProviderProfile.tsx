import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, Briefcase, Link as LinkIcon, Star, Mail } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

import Header from "@/components/header/user-header/Header";
import { getProviderById } from "@/api/userService"; 
import { User } from "@/types/model";

export default function ProviderProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [provider, setProvider] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProvider = async () => {
      try {
        const data = await getProviderById(id!);
        setProvider(data);
      } catch (error) {
        setError("Error fetching provider information.");
      } finally {
        setLoading(false);
      }
    };

    fetchProvider();
  }, [id]);

  if (loading) {
    return <ProviderProfileSkeleton />;
  }

  if (error || !provider) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Provider not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="relative">
        {/* Cover Photo */}
        <div className="h-64 bg-gradient-to-r from-blue-400 to-purple-500 relative">
          <img
            src={provider.avatarUrl}
            alt={provider.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30" />
        </div>

        {/* Provider Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <div className="max-w-6xl mx-auto flex items-end">
            <Avatar className="w-32 h-32 border-4 border-white">
              <AvatarImage src={provider.avatarUrl} alt={provider.name} />
              <AvatarFallback>{provider.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="ml-6 mb-2">
              <h1 className="text-4xl font-bold">{provider.name}</h1>
              <p className="text-xl">{provider.email}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main content */}
          <div className="w-full lg:w-2/3">
            <Card className="mb-8">
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">{provider.bio}</p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center">
                    <CalendarDays className="w-4 h-4 mr-2 text-muted-foreground" />
                    <span>Joined May 10, 2024</span>
                  </div>
                  <div className="flex items-center">
                    <LinkIcon className="w-4 h-4 mr-2 text-muted-foreground" />
                    <a href={"provider.website"} className="text-primary hover:underline">Visit Website</a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Tabs defaultValue="details" className="w-full">
              <TabsList className="w-full justify-start mb-6">
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="scholarship">Scholarship</TabsTrigger>
              </TabsList>
              <TabsContent value="details">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-4">Details</h2>
                    <p className="text-muted-foreground">Provider details go here. This section can include more specific information about the provider, their services, or any other relevant details.</p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="scholarship">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-4">Scholarship Information</h2>
                    <p className="text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias sapiente similique iusto asperiores expedita molestiae ipsam cumque! Labore earum doloremque rem eligendi libero, ratione, tempora unde excepturi, qui saepe quaerat.</p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-1/3 space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Provider Rating</h3>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 text-gray-300 dark:text-gray-600`}
                      fill="currentColor"
                    />
                  ))}
                  <span className="ml-2 text-sm text-muted-foreground">
                    Not rated yet
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <Button className="w-full" onClick={() => navigate('/contact')}>
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Provider
                </Button>
                <Button variant="outline" className="w-full" onClick={() => navigate('/scholarships')}>
                  View Scholarships
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Quick Facts</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Badge variant="secondary" className="mr-2">Type</Badge>
                    <span>{provider.type || 'Not specified'}</span>
                  </li>
                  <li className="flex items-center">
                    <Badge variant="secondary" className="mr-2">Established</Badge>
                    <span>{new Date(provider.createdAt).getFullYear()}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProviderProfileSkeleton() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="relative">
        {/* Cover Photo Skeleton */}
        <Skeleton className="h-64 w-full" />

        {/* Provider Info Overlay Skeleton */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="max-w-6xl mx-auto flex items-end">
            <Skeleton className="w-32 h-32 rounded-full" />
            <div className="ml-6 mb-2 space-y-2">
              <Skeleton className="h-8 w-48" />
              <Skeleton className="h-6 w-32" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main content skeleton */}
          <div className="w-full lg:w-2/3">
            <Card className="mb-8">
              <CardContent className="p-6">
                <Skeleton className="h-4 w-full mb-4" />
                <Skeleton className="h-4 w-3/4 mb-4" />
                <div className="grid grid-cols-2 gap-4">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                </div>
              </CardContent>
            </Card>

            <Tabs defaultValue="details" className="w-full">
              <TabsList className="w-full justify-start mb-6">
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="scholarship">Scholarship</TabsTrigger>
              </TabsList>
              <TabsContent value="details">
                <Card>
                  <CardContent className="p-6">
                    <Skeleton className="h-6 w-1/4 mb-4" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-3/4" />
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar skeleton */}
          <div className="w-full lg:w-1/3 space-y-6">
            <Card>
              <CardContent className="p-6">
                <Skeleton className="h-6 w-1/2 mb-2" />
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Skeleton key={i} className="h-5 w-5 mr-1" />
                  ))}
                  <Skeleton className="h-4 w-16 ml-2" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-10 w-full" />
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Skeleton className="h-6 w-1/2 mb-2" />
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Skeleton className="h-6 w-16 mr-2" />
                    <Skeleton className="h-4 w-24" />
                  </li>
                  <li className="flex items-center">
                    <Skeleton className="h-6 w-16 mr-2" />
                    <Skeleton className="h-4 w-24" />
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}