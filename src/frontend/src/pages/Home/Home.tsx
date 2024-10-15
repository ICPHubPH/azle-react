import useFlashcardStore from "@/store/useFlashcardStore";
import Reels from "./_components/Reels/Reels";
import React from "react";

function Home() {
  const { cards, redoCards } = useFlashcardStore();
  const getCards = useFlashcardStore((state) => state.getCards);

  React.useEffect(() => {
    getCards();
  }, [getCards]);

  return (
    <Reels
      cards={cards}
      redoCards={redoCards}
    />
  );
}

export default Home;
