import React, { useState } from 'react'

import { Button } from "../ui/button"

import { Briefcase, ChevronRight, ChevronDown, Building, School, Star, MessageSquare } from "lucide-react"
import { Textarea } from "../ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"

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
  type: 'school' | 'ojt' | 'internship';
  title: string;
  providerId: string;
}

interface FeedbackItem {
  id: string;
  providerId: string;
  rating: number;
  comment: string;
}

const RightCardSide: React.FC = () => {
  const [showAllBookmarks, setShowAllBookmarks] = useState<boolean>(false);
  const [showFeedback, setShowFeedback] = useState<boolean>(false); // For future integration
  const [feedbacks, setFeedbacks] = useState<FeedbackItem[]>([]); // For future integration
  const [newFeedback, setNewFeedback] = useState<{ rating: number; comment: string }>({ rating: 0, comment: '' });

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

  // Extended bookmark data with provider IDs
  const bookmarks: BookmarkItem[] = [
    { type: 'school', title: 'La Verdad Christian College', providerId: 'lvcc001' },
    { type: 'ojt', title: 'QuickStrike', providerId: 'qs001' },
    { type: 'school', title: 'University of the Philippines', providerId: 'up001' },
    { type: 'internship', title: 'Google Summer of Code', providerId: 'gsoc001' },
    { type: 'ojt', title: 'Microsoft Student Partners', providerId: 'msp001' },
    { type: 'school', title: 'Stanford Online Courses', providerId: 'stanford001' },
    { type: 'internship', title: 'NASA Space Apps Challenge', providerId: 'nasa001' },
  ];

  const getBookmarkIcon = (type: BookmarkItem['type']): React.ReactNode => {
    switch (type) {
      case 'school':
        return <School className="h-4 w-4" />;
      case 'internship':
        return <Briefcase className="h-4 w-4" />;
      case 'ojt':
        return <Building className="h-4 w-4" />;
    }
  };

  const visibleBookmarks = showAllBookmarks ? bookmarks : bookmarks.slice(0, 3);

  const handleSeeMore = (): void => {
    setShowAllBookmarks((prev) => !prev);
  };

  const handleFeedbackSubmit = (providerId: string) => {
    // This is where you would typically send the feedback to your backend
    console.log(`Submitting feedback for provider ${providerId}:`, newFeedback);
    setFeedbacks([...feedbacks, { id: Date.now().toString(), providerId, ...newFeedback }]);
    setNewFeedback({ rating: 0, comment: '' });
  };

  return (
    <div className="w-64 bg-background p-6 flex flex-col space-y-6 border-l h-screen overflow-y-auto sticky top-16">
      <div className="space-y-4">
        <h3 className="text-sm font-semibold">Saved Bookmarks</h3>
        <div className="space-y-2">
          {visibleBookmarks.map((bookmark, index) => (
            <div key={index} className="flex items-center justify-between">
              <Button variant="ghost" className="w-full justify-start" size="sm">
                {getBookmarkIcon(bookmark.type)}
                <span className="ml-2 truncate">{bookmark.title}</span>
              </Button>
              {showFeedback && (
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="ghost" size="sm" className="px-2">
                      <MessageSquare className="h-4 w-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Provide Feedback for {bookmark.title}</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Button
                            key={star}
                            variant="ghost"
                            size="sm"
                            onClick={() => setNewFeedback({ ...newFeedback, rating: star })}
                          >
                            <Star
                              className={`h-6 w-6 ${
                                star <= newFeedback.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                              }`}
                            />
                          </Button>
                        ))}
                      </div>
                      <Textarea
                        placeholder="Write your feedback here..."
                        value={newFeedback.comment}
                        onChange={(e) => setNewFeedback({ ...newFeedback, comment: e.target.value })}
                      />
                      <Button onClick={() => handleFeedbackSubmit(bookmark.providerId)}>Submit Feedback</Button>
                    </div>
                  </DialogContent>
                </Dialog>
              )}
            </div>
          ))}
        </div>
        {bookmarks.length > 3 && (
          <Button 
            variant="ghost" 
            className="w-full justify-between text-muted-foreground hover:text-foreground"
            onClick={handleSeeMore}
          >
            {showAllBookmarks ? 'See Less' : 'See More'}
            {showAllBookmarks ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
          </Button>
        )}
      </div>
    </div>
  )
}

export default RightCardSide