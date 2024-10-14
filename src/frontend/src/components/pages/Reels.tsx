import Flashcard from "../ui/Flashcard";
import styles from "./Reels.module.css";
import useFlashcardStore from "../../store/useFlashcardStore";

function Reels() {
  const { cards } = useFlashcardStore();

  return (
    <div className={`select-none ${styles.app}`}>
      <div className={styles.cards}>
        {cards.map(({ question, answer, id, recalledForCount }) => (
          <Flashcard
            front={question}
            back={answer}
            key={id}
            recalledForCount={recalledForCount}
            id={id}
          />
        ))}
      </div>
    </div>
  );
}

export default Reels;
