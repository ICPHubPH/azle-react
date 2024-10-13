import React, { useState } from "react";
import Flashcard from "../ui/Flashcard";
import styles from "./Reels.module.css";
import Stats from "../ui/Stats";

type Cards = {
  question: string;
  answer: string;
  recalledForCount: number;
  id: number;
};

const cards: Cards[] = [
  {
    question: "What is React?",
    answer: "A library for managing user interfaces",
    recalledForCount: 1,
    id: 1,
  },
  {
    question: "Where do you make Ajax requests in React?",
    answer: "The componentDidMount lifecycle event",
    recalledForCount: 0,
    id: 2,
  },
  {
    question: "What is JSX?",
    answer: "A syntax extension for JavaScript",
    recalledForCount: 4,
    id: 3,
  },
  {
    question: "What is a component in React?",
    answer: "A reusable piece of UI",
    recalledForCount: 1,
    id: 4,
  },
  {
    question: "What is state in React?",
    answer: "An object that determines how that component renders & behaves",
    recalledForCount: 5,
    id: 5,
  },
  {
    question: "What are props in React?",
    answer:
      "Inputs to a React component that allow data to be passed from one component to another",
    recalledForCount: 1,
    id: 6,
  },
];

function Reels() {
  const [reels, setReels] = useState<Cards[]>(cards);

  return (
    <div className={`select-none ${styles.app}`}>
      <div className={styles.cards}>
        {reels.map(({ question, answer, id, recalledForCount }) => (
          <Flashcard
            front={question}
            back={answer}
            key={id}
            recalledForCount={recalledForCount}
          />
        ))}
      </div>
    </div>
  );
}

export default Reels;
