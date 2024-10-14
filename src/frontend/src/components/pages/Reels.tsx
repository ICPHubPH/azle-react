import Flashcard from "../ui/Flashcard";
import styles from "./Reels.module.css";
import useFlashcardStore from "../../store/useFlashcardStore";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";

function Reels() {
  const { cards, redoCards } = useFlashcardStore();
  const [redo, setRedo] = useState<boolean>(false);
  const firstRedoCardRef = useRef<HTMLDivElement>(null);

  const renderRedoCards = () => {
    setRedo(!redo);
  };

  useEffect(() => {
    if (redo && firstRedoCardRef.current) {
      firstRedoCardRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [redo, redoCards]);

  return (
    <div className={`select-none ${styles.app}`}>
      <div className={styles.cards}>
        {redo ? (
          redoCards.map(({ question, answer, id, recalledForCount }) => (
            <Flashcard
              front={question}
              back={answer}
              key={id}
              id={id}
              recalledForCount={recalledForCount}
            />
          ))
        ) : cards.length ? (
          <>
            {cards.map(({ question, answer, id, recalledForCount }) => (
              <Flashcard
                front={question}
                back={answer}
                key={id}
                id={id}
                recalledForCount={recalledForCount}
              />
            ))}

            <div
              className={`${styles["last-card"]} ${styles["empty-cards"]} flex flex-col`}
            >
              <h1 className="text-xl sm:text-3xl lg:text-4xl">
                Congratulations!
              </h1>{" "}
              <p className="text-base">You reached the end of Subject!</p>
              {redoCards.length ? (
                <Button
                  className="bg-white text-black font-black text-base lg:text-lg hover:brightness-200 active:scale-90 ease-in-out duration-150"
                  onClick={() => renderRedoCards()}
                >
                  Redo Cards
                </Button>
              ) : null}
            </div>
          </>
        ) : null}
        {!cards.length && !redoCards.length && (
          <div
            className={`shadow-[inset_-12px_-8px_100px_#46464620] ${styles["empty-cards"]}`}
          >
            There are no cards to display
          </div>
        )}
      </div>
    </div>
  );
}

export default Reels;
