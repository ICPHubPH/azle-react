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
  getCards: () => Promise<void>;
};

async function fetchCards() {
  const response = await fetch("http://localhost:8000/react-cards");
  const cards = await response.json();
  return cards;
}

const useFlashcardStore = create<FlashcardStore>((set) => ({
  cards: [],
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
  getCards: async () => {
    const cards = await fetchCards();
    set({ cards });
  },
}));

export default useFlashcardStore;
