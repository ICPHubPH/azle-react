import Header from "@/components/Header"
import { Separator } from "@radix-ui/react-dropdown-menu"
import { useState } from 'react'
import { Bell, LogOut, Settings, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


const Profile: React.FC = () => {
    const [user, setUser] = useState({
        name: "John Mark Faeldonia",
        email: "jmfaeldonia@gmail.com",
        avatar: '/placeholder.svg?height=128&width=128&',
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
                    <aside className="md:w-1/4">
                    <Card>
                        <CardHeader>
                        <Avatar className="h-24 w-24 mx-auto ">
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
                            <Button variant="ghost" className="justify-start text-red-500 hover:text-red-600 hover:bg-red-100">
                            <LogOut className="mr-2 h-4 w-4" />
                            Log out
                            </Button>
                        </nav>
                        </CardContent>
                    </Card>
                    </aside>
                    <div className="flex-1">
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