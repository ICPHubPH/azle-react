import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, BookOpen, Edit } from "lucide-react";
import { Link } from "react-router-dom";

// Mock data for the decks
const decks = [
  {
    id: 1,
    title: "JavaScript Basics",
    cardCount: 30,
    description: "Fundamental concepts of JavaScript",
  },
  {
    id: 2,
    title: "React Hooks",
    cardCount: 25,
    description: "Understanding and using React Hooks",
  },
  {
    id: 3,
    title: "CSS Flexbox",
    cardCount: 20,
    description: "Mastering CSS Flexbox layout",
  },
  {
    id: 4,
    title: "Python Data Structures",
    cardCount: 35,
    description: "Common data structures in Python",
  },
  {
    id: 5,
    title: "SQL Queries",
    cardCount: 40,
    description: "Essential SQL queries for database management",
  },
  {
    id: 6,
    title: "Git Commands",
    cardCount: 15,
    description: "Frequently used Git commands",
  },
  {
    id: 1,
    title: "JavaScript Basics",
    cardCount: 30,
    description: "Fundamental concepts of JavaScript",
  },
  {
    id: 2,
    title: "React Hooks",
    cardCount: 25,
    description: "Understanding and using React Hooks",
  },
  {
    id: 3,
    title: "CSS Flexbox",
    cardCount: 20,
    description: "Mastering CSS Flexbox layout",
  },
  {
    id: 4,
    title: "Python Data Structures",
    cardCount: 35,
    description: "Common data structures in Python",
  },
  {
    id: 5,
    title: "SQL Queries",
    cardCount: 40,
    description: "Essential SQL queries for database management",
  },
  {
    id: 6,
    title: "Git Commands",
    cardCount: 15,
    description: "Frequently used Git commands",
  },
];

export default function FlashcardDecks() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDecks = decks.filter((deck) =>
    deck.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container-page">
      <h1 className="text-2xl font-bold py-6 px-4">Programming 101</h1>

      <div className="relative">
        <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <Input
          type="text"
          placeholder="Search decks..."
          className="pl-10"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {filteredDecks.length === 0 ? (
        <p className="text-center text-gray-500 mt-6">
          No decks found. Try a different search term.
        </p>
      ) : (
        <div className="grid grid-cols-1 mt-6 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredDecks.map((deck) => (
            <Card
              key={deck.id}
              className="flex flex-col"
            >
              <CardHeader className="flex">
                <CardTitle>{deck.title}</CardTitle>
                <Badge
                  className="px-2 py-1"
                  variant="secondary"
                >
                  {deck.cardCount} cards
                </Badge>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">{deck.description}</p>
              </CardContent>
              <CardFooter className="flex justify-between mt-auto">
                <Button
                  variant="outline"
                  size="sm"
                >
                  <Edit className="w-4 h-4 mr-2" />
                  Edit
                </Button>

                <Link to="/flashcards">
                  <Button
                    className="font-bold"
                    size="sm"
                  >
                    <BookOpen className=" w-4 h-4 mr-2" />
                    Study
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
