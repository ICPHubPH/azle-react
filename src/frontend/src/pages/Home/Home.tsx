import useFlashcardStore from "@/store/useFlashcardStore";
import Reels from "./_components/Reels/Reels";
import React from "react";

function Home() {
  const { redoCards } = useFlashcardStore();

  const cards = [
    {
      "question": "What is React?",
      "answer": "A library for managing user interfaces",
      "recalledForCount": 1,
      "id": 1,
      "hint": "A ______ for managing ______"
    },
    {
      "question": "Where do you make Ajax requests in React?",
      "answer": "The componentDidMount lifecycle event",
      "recalledForCount": 0,
      "id": 2,
      "hint": "The ______ event"
    },
    {
      "question": "What is JSX?",
      "answer": "A syntax extension for JavaScript",
      "recalledForCount": 4,
      "id": 3,
      "hint": "A ______ JavaScript"
    },
    {
      "question": "What is a component in React?",
      "answer": "A reusable piece of UI",
      "recalledForCount": 1,
      "id": 4,
      "hint": "A ______ UI"
    },
    {
      "question": "What is state in React?",
      "answer": "An object that determines how that component renders & behaves",
      "recalledForCount": 0,
      "id": 5,
      "hint": "No hint available"
    },
    {
      "question": "What are props in React?",
      "answer": "Inputs to a React component that allow data to be passed from one component to another",
      "recalledForCount": 0,
      "id": 6,
      "hint": "No hint available"
    }
  ] 


  return (
    <div className="h-screen">
      <Reels
        cards={cards}
        redoCards={redoCards}
      />
    </div>
  );
}

export default Home;
