"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  BookOpen,
  MoreHorizontal,
  Heart,
  Pencil,
  Trash2,
  LayoutGrid,
  LayoutList,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";

interface ClassData {
  id: string;
  name: string;
  icon: string;
  deckCount: number;
  description: string;
  createdAt: string;
  likes: number;
  isLiked: boolean;
}

const sampleClasses: ClassData[] = [
  {
    id: "1",
    name: "Mathematics",
    icon: "M",
    deckCount: 5,
    description: "Algebra, Geometry, and Calculus flashcards",
    createdAt: "2023-05-15T10:30:00Z",
    likes: 15,
    isLiked: false,
  },
  {
    id: "2",
    name: "History",
    icon: "H",
    deckCount: 3,
    description: "World History and American History flashcards",
    createdAt: "2023-06-01T14:45:00Z",
    likes: 8,
    isLiked: true,
  },

  // Add more sample classes as needed
];

export default function TwitterStyleClassLayout() {
  const [classes, setClasses] = useState<ClassData[]>(sampleClasses);
  const [isGridLayout, setIsGridLayout] = useState(false);

  const handleDelete = (id: string) => {
    setClasses(classes.filter((c) => c.id !== id));
  };

  const handleLike = (id: string) => {
    setClasses(
      classes.map((c) => {
        if (c.id === id) {
          return {
            ...c,
            likes: c.isLiked ? c.likes - 1 : c.likes + 1,
            isLiked: !c.isLiked,
          };
        }
        return c;
      })
    );
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="container-page">
      <div className="flex items-center sticky top-0 bg-background z-10 py-2">
        <h1 className="text-2xl font-bold py-6 px-4">Your Classes</h1>
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsGridLayout(!isGridLayout)}
        >
          {isGridLayout ? (
            <LayoutList className="h-4 w-4" />
          ) : (
            <LayoutGrid className="h-4 w-4" />
          )}
        </Button>
      </div>
      <div
        className={`grid gap-4 ${isGridLayout ? "md:grid-cols-2" : "grid-cols-1"}`}
      >
        {classes.map((classItem) => (
          <Card
            key={classItem.id}
            className="overflow-hidden border-b border-border hover:bg-accent transition-colors"
          >
            <CardHeader className="flex flex-row items-start gap-4 p-4">
              <Avatar className="w-10 h-10">
                <AvatarFallback>{classItem.icon}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold">{classItem.name}</h2>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                      >
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Pencil className="mr-2 h-4 w-4" />
                        Edit
                      </DropdownMenuItem>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <DropdownMenuItem
                            onSelect={(e) => e.preventDefault()}
                          >
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete
                          </DropdownMenuItem>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>
                              Are you absolutely sure?
                            </AlertDialogTitle>
                            <AlertDialogDescription>
                              This action cannot be undone. This will
                              permanently delete the class and all its
                              associated decks and flashcards.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction
                              onClick={() => handleDelete(classItem.id)}
                            >
                              Delete
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <p className="text-sm text-muted-foreground">
                  {formatDate(classItem.createdAt)}
                </p>
              </div>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <p className="text-sm mb-2">{classItem.description}</p>
              <div className="flex items-center text-sm text-muted-foreground">
                <BookOpen className="mr-1 h-4 w-4" />
                {classItem.deckCount}{" "}
                {classItem.deckCount === 1 ? "deck" : "decks"}
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0 flex justify-between items-center">
              <Button
                variant="ghost"
                size="sm"
                className={`p-0 h-auto font-normal ${classItem.isLiked ? "text-red-500" : ""}`}
                onClick={() => handleLike(classItem.id)}
              >
                <Heart
                  className={`mr-1 h-4 w-4 ${classItem.isLiked ? "fill-current" : ""}`}
                />
                {classItem.likes}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="ml-auto"
              >
                <Link to="/deck">See Decks</Link>
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
