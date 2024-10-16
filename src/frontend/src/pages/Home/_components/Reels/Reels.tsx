import Flashcard from "../Flashcard/Flashcard";
import styles from "./Reels.module.css";
import { HiArrowLongLeft } from "react-icons/hi2";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";

interface Card {
  question: string;
  answer: string;
  id: number;
  recalledForCount: number;
}

interface ReelsProps {
  cards: Card[];
  redoCards: Card[];
}

function Reels({ cards, redoCards }: ReelsProps) {
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
    <div className={`select-none flex flex-1 ${styles.app}`}>
      <div
        className={`p-0 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 relative h-full  w-full overflow-scroll snap-y snap-mandatory py-0 sm:py-2 cards ${styles.cards}`}
      >
        {!cards.length && !redoCards.length ? (
          <div
            className={`${styles["last-card"]} ${styles["empty-cards"]} flex flex-col`}
          >
            <p className="text-base ">There are no cards to display.</p>
            <Button className="mt-5 bg-white text-black font-black text-base lg:text-lg hover:brightness-200 active:scale-90 ease-in-out duration-150">
              Create cards
            </Button>
          </div>
        ) : redo ? (
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
      </div>
    </div>
  );
}

export default Reels;
