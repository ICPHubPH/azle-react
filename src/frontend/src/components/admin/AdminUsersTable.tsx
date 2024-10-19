import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import StudentsTable from "./StudentsTable";
import {
  UnverifiedProvidersTable,
  VerfiedProvidersTable,
} from "./ProvidersTable";

export default function AdminUserManagement() {
  const [activeTab, setActiveTab] = useState("verifiedProviders");

  return (
    <div className="container mx-auto p-4 space-y-4 flex-grow">
      <h1 className="text-2xl font-bold mb-4">Admin User Management</h1>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="w-full sm:w-auto">
          <TabsTrigger value="verifiedProviders" className=" sm:flex-none">
            Verified Providers
          </TabsTrigger>
          <TabsTrigger value="unverifiedProviders" className=" sm:flex-none">
            Unverified Providers
          </TabsTrigger>
          <TabsTrigger value="students" className=" sm:flex-none">
            Students
          </TabsTrigger>
        </TabsList>
        <TabsContent value="verifiedProviders" className="mt-4">
          <VerfiedProvidersTable />
        </TabsContent>
        <TabsContent value="unverifiedProviders" className="mt-4">
          <UnverifiedProvidersTable />
        </TabsContent>
        <TabsContent value="students" className="mt-4">
          <StudentsTable />
        </TabsContent>
      </Tabs>
    </div>
  );
}
