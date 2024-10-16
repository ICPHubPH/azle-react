import useFlashcardStore from "@/store/useFlashcardStore";
import Reels from "./_components/Reels/Reels";
import { Navigation } from "../../Navigation";

function Home() {
  const { cards, redoCards } = useFlashcardStore();

  return (
    <Reels
      cards={cards}
      redoCards={redoCards}
    />
  );
}

export default Home;
