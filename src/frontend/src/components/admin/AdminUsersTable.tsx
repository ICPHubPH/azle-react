import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import StudentsTable from "./StudentsTable";
import {
  ArchivedUsers,
  UnverifiedProvidersTable,
  VerfiedProvidersTable,
} from "./ProvidersTable";

export default function AdminUserManagement() {
  const [activeTab, setActiveTab] = useState("verifiedProviders");

  return (
    <div className="container mx-auto p-4 space-y-4 flex-grow">
      <h1 className="text-2xl font-bold mb-4">Admin User Management</h1>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className=" grid grid-cols-4 w-full sm:w-auto">
          <TabsTrigger value="verifiedProviders">
            Verified 
          </TabsTrigger>
          <TabsTrigger value="unverifiedProviders">
            Not Verified 
          </TabsTrigger>
          <TabsTrigger value="archives">
            Archives
          </TabsTrigger>
          <TabsTrigger value="students">
            Students
          </TabsTrigger>
        </TabsList>
        <TabsContent value="verifiedProviders" className="mt-4">
          <VerfiedProvidersTable />
        </TabsContent>
        <TabsContent value="unverifiedProviders" className="mt-4">
          <UnverifiedProvidersTable />
        </TabsContent>
        <TabsContent value="archives" className="mt-4">
          <ArchivedUsers />
        </TabsContent>
        <TabsContent value="students" className="mt-4">
          <StudentsTable />
        </TabsContent>
      </Tabs>
    </div>
  );
}
