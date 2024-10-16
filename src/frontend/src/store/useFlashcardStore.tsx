import { create } from "zustand";

type Card = {
  question: string;
  answer: string;
  recalledForCount: number;
  id: number;
  hint: string;
  isRedo?: boolean;
};

type FlashcardStore = {
  cards: Card[];
  redoCards: Card[];

  incrementRecalledForCount: (id: number) => void;
  decrementRecalledForCount: (id: number) => void;
  getHint: (id: number) => string;
  redo: (id: number) => void;
  getIsRedo: (id: number) => boolean;
  // getCards: () => Promise<void>;
};

// async function fetchCards() {
//   const response = await fetch("http://localhost:8000/react-cards");
//   const cards = await response.json();
//   return cards;
// }

const useFlashcardStore = create<FlashcardStore>((set) => ({
  cards: [
    {
      question: "What is React?",
      answer: "A library for managing user interfaces",
      recalledForCount: 1,
      id: 1,
      hint: "A ______ for managing ______",
      deckId: 1,
      createdAt: "2023-10-01T00:00:00Z",
    },
    {
      question: "Where do you make Ajax requests in React?",
      answer: "The componentDidMount lifecycle event",
      recalledForCount: 0,
      id: 2,
      hint: "The ______ event",
      deckId: 1,
      createdAt: "2023-10-01T00:00:00Z",
    },
    {
      question: "What is JSX?",
      answer: "A syntax extension for JavaScript",
      recalledForCount: 4,
      id: 3,
      hint: "A ______ JavaScript",
      deckId: 1,
      createdAt: "2023-10-01T00:00:00Z",
    },
    {
      question: "What is a component in React?",
      answer: "A reusable piece of UI",
      recalledForCount: 1,
      id: 4,
      hint: "A ______ UI",
      deckId: 1,
      createdAt: "2023-10-01T00:00:00Z",
    },
    {
      question: "What is state in React?",
      answer: "An object that determines how that component renders & behaves",
      recalledForCount: 0,
      id: 5,
      hint: "No hint available",
      deckId: 1,
      createdAt: "2023-10-01T00:00:00Z",
    },
    {
      question: "What are props in React?",
      answer:
        "Inputs to a React component that allow data to be passed from one component to another",
      recalledForCount: 0,
      id: 6,
      hint: "No hint available",
      deckId: 1,
      createdAt: "2023-10-01T00:00:00Z",
    },
  ],
  redoCards: [],
  getHint(id) {
    const card = this.cards.find((card) => card.id === id);
    return card ? card.hint : "No hint available";
  },
  incrementRecalledForCount: (id: number) =>
    set((state) => ({
      cards: state.cards.map((card) =>
        card.id === id
          ? { ...card, recalledForCount: card.recalledForCount + 1 }
          : card
      ),
    })),
  decrementRecalledForCount: (id: number) =>
    set((state) => ({
      cards: state.cards.map((card) =>
        card.id === id && card.recalledForCount > 0
          ? { ...card, recalledForCount: card.recalledForCount - 1 }
          : card
      ),
    })),
  redo: (id: number) =>
    set((state) => {
      return {
        cards: state.cards.filter((card) => card.id !== id),
        redoCards: [
          state.cards.find((card) => card.id === id) as Card,
          ...state.redoCards,
        ].filter((card): card is Card => card !== undefined),
      };
    }),
  getIsRedo(id) {
    const card = this.redoCards.find((card) => card.id === id);
    return card ? true : false;
  },
  // getCards: async () => {
  //   const cards = await fetchCards();
  //   set({ cards });
  // },
}));

export default useFlashcardStore;
