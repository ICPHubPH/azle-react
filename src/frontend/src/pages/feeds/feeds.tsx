'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { PlusCircle, Search } from 'lucide-react'

type Post = {
  id: number
  title: string
  content: string
  type: 'scholarship' | 'internship'
  date: string
}

const initialPosts: Post[] = [
  { id: 1, title: "Summer Internship at Tech Co", content: "Great opportunity for CS students", type: "internship", date: "2023-06-01" },
  { id: 2, title: "STEM Scholarship 2023", content: "Full ride for exceptional students", type: "scholarship", date: "2023-05-15" },
  { id: 3, title: "Data Science Internship", content: "Work with cutting-edge AI", type: "internship", date: "2023-06-10" },
  { id: 4, title: "Women in Engineering Scholarship", content: "Supporting diversity in STEM", type: "scholarship", date: "2023-05-20" },
]

export default function PostFeed() {
  const [posts, setPosts] = useState<Post[]>(initialPosts)
  const [activeTab, setActiveTab] = useState<'all' | 'scholarship' | 'internship'>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortOrder, setSortOrder] = useState<'latest' | 'oldest'>('latest')

  const filteredPosts = posts
    .filter(post => activeTab === 'all' || post.type === activeTab)
    .filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                    post.content.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => sortOrder === 'latest' ? 
      new Date(b.date).getTime() - new Date(a.date).getTime() : 
      new Date(a.date).getTime() - new Date(b.date).getTime()
    )

  const handleCreatePost = () => {
    // Implement create post functionality here
    console.log("Create post clicked")
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Post Feed</h1>
        <Button onClick={handleCreatePost}>
          <PlusCircle className="mr-2 h-4 w-4" /> Create Post
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as typeof activeTab)}>
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="scholarship">Scholarships</TabsTrigger>
          <TabsTrigger value="internship">Internships</TabsTrigger>
        </TabsList>

        <div className="flex space-x-4 mb-6">
          <div className="relative flex-grow">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-8"
            />
          </div>
          <Select value={sortOrder} onValueChange={(value) => setSortOrder(value as 'latest' | 'oldest')}>
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
            {filteredPosts.map(post => (
              <Card key={post.id}>
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{post.content}</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <span className="text-sm text-muted-foreground">{post.type}</span>
                  <span className="text-sm text-muted-foreground">{post.date}</span>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="scholarship" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.filter(post => post.type === 'scholarship').map(post => (
              <Card key={post.id}>
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{post.content}</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <span className="text-sm text-muted-foreground">{post.type}</span>
                  <span className="text-sm text-muted-foreground">{post.date}</span>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="internship" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.filter(post => post.type === 'internship').map(post => (
              <Card key={post.id}>
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{post.content}</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <span className="text-sm text-muted-foreground">{post.type}</span>
                  <span className="text-sm text-muted-foreground">{post.date}</span>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}