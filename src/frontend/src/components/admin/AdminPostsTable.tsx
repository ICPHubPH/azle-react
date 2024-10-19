import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Active, Archived } from "./PostsTable";


export default function AdminPostsManagement() {
  const [activeTab, setActiveTab] = useState("active");

  return (
    <div className="container mx-auto p-4 space-y-4 flex-grow">
      <h1 className="text-2xl font-bold mb-4">Admin Posts Management</h1>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="w-full sm:w-auto">
          <TabsTrigger value="active" className=" sm:flex-none">
            Active Posts
          </TabsTrigger>
          <TabsTrigger value="archived" className=" sm:flex-none">
            Archived Posts
          </TabsTrigger>
        </TabsList>
        <TabsContent value="active" className="mt-4">
            <Active />
        </TabsContent>
        <TabsContent value="archived" className="mt-4">
            <Archived />
        </TabsContent>
      </Tabs>
    </div>
  );
}
