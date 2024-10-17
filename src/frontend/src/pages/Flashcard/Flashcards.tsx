import useFlashcardStore from "@/store/useFlashcardStore";
import Reels from "./_components/Reels/Reels";

function Flashcards() {
  const { cards, redoCards } = useFlashcardStore();

  return (
    <Reels
      cards={cards}
      redoCards={redoCards}
    />
  );
}

export default Flashcards;
