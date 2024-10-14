import Header from "@/components/student-component/Header"
import { Separator } from "@/components/ui/separator"
import { useState } from 'react'
import { Bell, LogOut, Settings, User, Pencil, Shield, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

const Profile: React.FC = () => {
    const [user, setUser] = useState({
        name: "Jireh Belen",
        email: "jirehbelen@student.laverdad.edu.ph",
        avatar: 'https://res.cloudinary.com/dihmqs39z/image/upload/v1719380300/lmsblt2fx20tv1szowiy.jpg',
    })

    const savedScholarships = [
        { id: 4, title: "Environmental Studies Award", provider: "Green Earth Foundation", deadline: "2024-10-15" },
        { id: 5, title: "Future Entrepreneurs Scholarship", provider: "Business Leaders of Tomorrow", deadline: "2024-11-30" },
    ]

    return (
        <div className='scroll-smooth'>
            <Header />
            <Separator />
            <div className="container mx-auto">
                <main className="flex-1 py-12">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col md:flex-row gap-6 ">
                            <aside className="">
                                <Card className="border-none shadow-none">
                                    <CardHeader>
                                        <Avatar className="h-60 w-60 md:h-36 md:w-36 lg:h-60 lg:w-60  mx-auto ">
                                            <AvatarImage src={user.avatar} alt={user.name} className="" />
                                            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                                        </Avatar>
                                        <CardTitle className="text-4xl md:text-2xl font-bold text-center md:text-start  ">{user.name}</CardTitle>
                                        <CardDescription className="text-center md:text-start">{user.email}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <nav className="flex flex-col space-y-1 ">
                                            <Button variant="ghost" className="justify-start font-normal ">
                                                <Pencil className="mr-2 h-4 w-4" />
                                                Edit
                                            </Button>
                                            <Button variant="ghost" className="justify-start font-normal">
                                                <Settings className="mr-2 h-4 w-4" />
                                                Settings
                                            </Button>
                                            <Button variant="ghost" className="justify-start text-red-500 hover:text-red-600 hover:bg-red-100 font-normal">
                                                <LogOut className="mr-2 h-4 w-4" />
                                                Log out
                                            </Button>
                                        </nav>
                                    </CardContent>
                                </Card>
                            </aside>
                            <div className="flex-1 md:right-10  ">
                                <Tabs defaultValue="saved">
                                    <TabsList className="mb-4">
                                        <TabsTrigger value="saved">Saved Scholarships</TabsTrigger>
                                        <TabsTrigger value="settings">Account Settings</TabsTrigger>
                                    </TabsList>
                                    <TabsContent value="saved">
                                        <h2 className="text-2xl font-bold mb-4">Saved Scholarships</h2>
                                        {savedScholarships.map((scholarship) => (
                                            <Card key={scholarship.id} className="mb-4">
                                                <CardHeader>
                                                    <CardTitle>{scholarship.title}</CardTitle>
                                                    <CardDescription>{scholarship.provider}</CardDescription>
                                                </CardHeader>
                                                <CardContent>
                                                    <p className="text-sm text-muted-foreground">Deadline: {scholarship.deadline}</p>
                                                </CardContent>
                                                <CardFooter>
                                                    <Button>View Details</Button>
                                                </CardFooter>
                                            </Card>
                                        ))}
                                    </TabsContent>
                                    <TabsContent value="settings">
                                        <h2 className="text-2xl font-bold mb-4">Account Settings</h2>
                                        <Card className="mb-6">
                                            <CardHeader>
                                                <CardTitle className="text-lg">Personal Information</CardTitle>
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
                                        <Card className="mb-6">
                                            <CardHeader>
                                                <CardTitle className="text-lg">Notification Preferences</CardTitle>
                                            </CardHeader>
                                            <CardContent className="space-y-4">
                                                <div className="flex items-center justify-between">
                                                    <div className="space-y-0.5">
                                                        <Label htmlFor="emailNotifications">Email Notifications</Label>
                                                        <p className="text-sm text-muted-foreground">Receive scholarship updates via email</p>
                                                    </div>
                                                    <Switch id="emailNotifications" />
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <div className="space-y-0.5">
                                                        <Label htmlFor="pushNotifications">Push Notifications</Label>
                                                        <p className="text-sm text-muted-foreground">Receive alerts on your device</p>
                                                    </div>
                                                    <Switch id="pushNotifications" />
                                                </div>
                                            </CardContent>
                                        </Card>
                                        <Card>
                                            <CardHeader>
                                                <CardTitle className="text-lg">Security</CardTitle>
                                            </CardHeader>
                                            <CardContent className="space-y-4">
                                                <Button variant="outline" className="w-full justify-start">
                                                    <Shield className="mr-2 h-4 w-4" />
                                                    Change Password
                                                </Button>
                                                <Button variant="outline" className="w-full justify-start">
                                                    <Mail className="mr-2 h-4 w-4" />
                                                    Two-Factor Authentication
                                                </Button>
                                            </CardContent>
                                        </Card>
                                    </TabsContent>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Profile