import { useState } from "react";
import { Bell, LogOut, Settings, User, Pencil, Shield, Mail, AlertTriangle, Key } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/student-component/Header";

export default function Profile() {
  const [user, setUser] = useState({
    name: "Jireh Belen",
    email: "jirehbelen@student.laverdad.edu.ph",
    avatar: 'https://res.cloudinary.com/dihmqs39z/image/upload/v1719380300/lmsblt2fx20tv1szowiy.jpg',
  });

  const savedScholarships = [
    { id: 4, title: "Environmental Studies Award", provider: "Green Earth Foundation", deadline: "2024-10-15" },
    { id: 5, title: "Future Entrepreneurs Scholarship", provider: "Business Leaders of Tomorrow", deadline: "2024-11-30" },
  ];

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deleteConfirmation, setDeleteConfirmation] = useState("");

  const handleDeleteAccount = () => {
    if (deleteConfirmation === user.name) {
      console.log("Account deleted");
      setIsDeleteModalOpen(false);
    } else {
      alert("Please enter your username correctly to confirm deletion.");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <Header/>
      </header>
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8">
          <aside>
            <Card>
              <CardHeader>
                <Avatar className="h-24 w-24 mx-auto">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <CardTitle className="text-center">{user.name}</CardTitle>
                <CardDescription className="text-center">{user.email}</CardDescription>
              </CardHeader>
              <CardContent>
                <nav className="flex flex-col space-y-1">
                  <Button variant="ghost" className="justify-start">
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </Button>
                  <Button variant="ghost" className="justify-start">
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </Button>
                  <Button variant="ghost" className="justify-start">
                    <Shield className="mr-2 h-4 w-4" />
                    Privacy
                  </Button>
                </nav>
              </CardContent>
            </Card>
          </aside>
          <div>
            <Tabs defaultValue="saved">
              <TabsList className="mb-6">
                <TabsTrigger value="saved">Saved Bookmarks</TabsTrigger>
                <TabsTrigger value="settings">Account Settings</TabsTrigger>
              </TabsList>
              <TabsContent value="saved">
                <h2 className="text-2xl font-bold mb-4">Saved Scholarships</h2>
                <div className="grid gap-4">
                  {savedScholarships.map((scholarship) => (
                    <Card key={scholarship.id}>
                      <CardHeader>
                        <CardTitle>{scholarship.title}</CardTitle>
                        <CardDescription>{scholarship.provider}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Deadline: {scholarship.deadline}
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button>View Details</Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="settings">
                <h2 className="text-2xl font-bold mb-6">Account Settings</h2>
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Personal Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="fullName">Full Name</Label>
                        <Input id="fullName" defaultValue={user.name} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" defaultValue={user.email} />
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button>Save Changes</Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Change Password</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="currentPassword">Current Password</Label>
                        <Input id="currentPassword" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="newPassword">New Password</Label>
                        <Input id="newPassword" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirm New Password</Label>
                        <Input id="confirmPassword" type="password" />
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button>Update Password</Button>
                    </CardFooter>
                  </Card>
                  <Card className="border-destructive">
                    <CardHeader>
                      <CardTitle className="text-destructive">Danger Zone</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Once you delete your account, there is no going back. Please be certain.
                      </p>
                      <Dialog open={isDeleteModalOpen} onOpenChange={setIsDeleteModalOpen}>
                        <DialogTrigger asChild>
                          <Button variant="destructive">Delete Account</Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Delete Account</DialogTitle>
                            <DialogDescription>
                              This action is irreversible. All your data will be permanently removed.
                            </DialogDescription>
                          </DialogHeader>
                          <div className="py-4">
                            <Input
                              value={deleteConfirmation}
                              onChange={(e) => setDeleteConfirmation(e.target.value)}
                              placeholder={`Type "${user.name}" to confirm`}
                            />
                          </div>
                          <DialogFooter>
                            <Button variant="secondary" onClick={() => setIsDeleteModalOpen(false)}>
                              Cancel
                            </Button>
                            <Button
                              variant="destructive"
                              onClick={handleDeleteAccount}
                              disabled={deleteConfirmation !== user.name}
                            >
                              Delete Account
                            </Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  );
}