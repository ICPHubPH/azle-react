import Flashcard from "../cardreels/Flashcard";
import styles from "./Reels.module.css";
import useFlashcardStore from "../../store/useFlashcardStore";
import { HiArrowLongLeft } from "react-icons/hi2";
import { Button } from "@/components/common/button";
import { useEffect, useState, useRef } from "react";

function Reels() {
  const { cards, redoCards } = useFlashcardStore();
  const [redo, setRedo] = useState<boolean>(false);
  const firstRedoCardRef = useRef<HTMLDivElement>(null);

  const renderRedoCards = () => {
    setRedo(true);
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
          <>
            {redoCards.map(
              ({ question, answer, id, recalledForCount }, index) => (
                <span
                  ref={index === 0 ? firstRedoCardRef : null}
                  key={id + answer}
                >
                  <Flashcard
                    front={question}
                    back={answer}
                    id={id}
                    recalledForCount={recalledForCount}
                  />
                </span>
              )
            )}

            <div
              className={`${styles["last-card"]} ${styles["empty-cards"]} flex flex-col`}
            >
              <h1 className="text-xl sm:text-3xl lg:text-4xl">
                Congratulations!
              </h1>{" "}
              <p className="text-base">You reached the end of Subject!</p>
              <Button
                size="icon"
                className="bg-white text-black hover:brightness-200 active:scale-90 ease-in-out duration-150 mt-5"
              >
                <HiArrowLongLeft className="h-4 w-4" />
              </Button>
            </div>
          </>
        ) : (
          <>
            {cards.map(({ question, answer, id, recalledForCount }) => (
              <Flashcard
                front={question}
                back={answer}
                key={id + question}
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
                  className="mt-5 bg-white text-black font-black text-base lg:text-lg hover:brightness-200 active:scale-90 ease-in-out duration-150"
                  onClick={() => renderRedoCards()}
                >
                  Redo Cards
                </Button>
              ) : null}
            </div>
          </>
        )}
        {!cards.length && !redoCards.length && (
          <div
            className={`${styles["last-card"]} ${styles["empty-cards"]} flex flex-col`}
          >
            <p className="text-base ">There are no cards to display.</p>
            <Button className="mt-5 bg-white text-black font-black text-base lg:text-lg hover:brightness-200 active:scale-90 ease-in-out duration-150">
              Create cards
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Reels;
