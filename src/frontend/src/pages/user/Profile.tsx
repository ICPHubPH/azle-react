import Header from "@/components/header/user-header/Header";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProfileSidebar from "@/components/profile/ProfileSidebar";
import SavedScholarships from "@/components/profile/SavedScholarships";
import AccountSettings from "@/components/profile/AccountSettings";

export default function Profile() {
  const [user, setUser] = useState({
    name: "Jireh Belen",
    email: "jirehbelen@student.laverdad.edu.ph",
    avatar:
      "https://res.cloudinary.com/dihmqs39z/image/upload/v1719380300/lmsblt2fx20tv1szowiy.jpg",
  });

  return (
    <div className="scroll-smooth">
      <Header />
      <Separator />
      <div className="container mx-auto">
        <main className="flex-1 py-12">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row gap-6">
              <ProfileSidebar user={user} />
              <div className="flex-1 md:right-10">
                <Tabs defaultValue="saved">
                  <TabsList className="mb-4">
                    <TabsTrigger value="saved">Saved Scholarships</TabsTrigger>
                    <TabsTrigger value="settings">Account Settings</TabsTrigger>
                  </TabsList>
                  <TabsContent value="saved">
                    <SavedScholarships />
                  </TabsContent>
                  <TabsContent value="settings">
                    <AccountSettings user={user} setUser={setUser} />
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}