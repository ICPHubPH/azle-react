import useFlashcardStore from "@/store/useFlashcardStore";
import Reels from "./_components/Reels/Reels";

function Home() {
  const { cards, redoCards } = useFlashcardStore();

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
