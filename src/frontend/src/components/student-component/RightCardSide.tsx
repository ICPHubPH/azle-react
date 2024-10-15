import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { UserCircle, Settings, Bookmark, GraduationCap, Briefcase, ChevronRight } from "lucide-react"

interface User {
  name: string;
  avatar: string;
  bio: string;
  information: {
    email: string;
    role: string;
    createdAt: string;
  };
}

interface BookmarkItem {
  type: 'scholarship' | 'internship' | 'ojt';
  title: string;
}

export default function RightCardSide() {
  // Placeholder user data
  const user: User = {
    name: "Johnmack Faeldonia",
    avatar: "https://scontent.fcrk2-2.fna.fbcdn.net/v/t39.30808-6/452912470_2526121527595306_3752199441102383149_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEtCgs-XyXL89ENkqy7JG3peWlRnJXahMF5aVGcldqEwU1hJd6qhyhKUGWsK52KiDE16tK8oTnAWiBcfTghtwJt&_nc_ohc=0aFGsrCXi6EQ7kNvgGeDTFV&_nc_zt=23&_nc_ht=scontent.fcrk2-2.fna&_nc_gid=ANu0xv9z85XR0ENGh62yylc&oh=00_AYBGZKYtxIFtM7UfMbbYyIGbDTDRHZIUjJCb0LPeVAY0kg&oe=670F8366",
    bio: "Aspiring software engineer with a passion for AI and machine learning.",
    information: {
      email: "john.doe@gmail.com",
      role: "Student",
      createdAt: "May 16, 2016",
    }
  };

  // Placeholder bookmark data
  const bookmarks: BookmarkItem[] = [
    { type: 'scholarship', title: 'La Verdad Christian College' },
    { type: 'internship', title: 'Commission on Higher Education (CHED)' },
    { type: 'ojt', title: 'QuickStrike' },
  ];

  const getBookmarkIcon = (type: BookmarkItem['type']) => {
    switch (type) {
      case 'scholarship':
        return <GraduationCap className="h-4 w-4" />;
      case 'internship':
        return <Briefcase className="h-4 w-4" />;
      case 'ojt':
        return <Bookmark className="h-4 w-4" />;
    }
  };

  const handleSeeMore = () => {
    // Implement the logic to show more bookmarks or navigate to a full bookmarks page
    console.log("See more bookmarks clicked");
  };

  return (
    <div className="w-64 bg-background p-6 flex flex-col space-y-6 border-l h-screen overflow-y-auto sticky top-16">
      <div className="space-y-4">
        <h3 className="text-sm font-semibold">Saved Bookmarks</h3>
        <div className="space-y-2">
          {bookmarks.map((bookmark, index) => (
            <Button key={index} variant="ghost" className="w-full justify-start" size="sm">
              {getBookmarkIcon(bookmark.type)}
              <span className="ml-2 truncate">{bookmark.title}</span>
            </Button>
          ))}
        </div>
        <Button 
          variant="ghost" 
          className="w-full justify-between text-muted-foreground hover:text-foreground"
          onClick={handleSeeMore}
        >
          See More
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}