import createStore from "zustand";

type Card = {
  question: string;
  answer: string;
  recalledForCount: number;
  id: number;
};

type Store = {
  cards: Card[];
  incrementRecalledForCount: (id: number) => void;
};

const useStore = createStore<Store>((set) => ({
  cards: [
    {
      question: "What is React?",
      answer: "A library for managing user interfaces",
      recalledForCount: 0,
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
      recalledForCount: 0,
      id: 3,
    },
    {
      question: "What is a component in React?",
      answer: "A reusable piece of UI",
      recalledForCount: 0,
      id: 4,
    },
    {
      question: "What is state in React?",
      answer: "An object that determines how that component renders & behaves",
      recalledForCount: 0,
      id: 5,
    },
    {
      question: "What are props in React?",
      answer:
        "Inputs to a React component that allow data to be passed from one component to another",
      recalledForCount: 0,
      id: 6,
    },
  ],
  incrementRecalledForCount: (id: number) =>
    set((state) => ({
      cards: state.cards.map((card) =>
        card.id === id
          ? { ...card, recalledForCount: card.recalledForCount + 1 }
          : card
      ),
    })),
}));

export default useCardsStore;
