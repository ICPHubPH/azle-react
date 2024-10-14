import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./Flashcard.module.css";
import Stats from "./Stats";

interface FlashcardProps {
  front: string;
  back: string;
  recalledForCount: number;
  id: number;
  ref?: any;
}

const Flashcard: React.FC<FlashcardProps> = ({
  front,
  back,
  recalledForCount,
  id,
}: FlashcardProps) => {
  const [flipCard, setFlipCard] = useState<boolean>(false);

  return (
    <div className={styles.flashcard}>
      <motion.div
        initial={{ rotateY: 180 }}
        animate={{ rotateY: flipCard ? 0 : 360 }}
        transition={{ duration: 0.8, type: "spring" }}
        className={`${flipCard ? styles.front : styles.back}`}
        onClick={() => setFlipCard(!flipCard)}
      >
        {flipCard ? back : front}
      </motion.div>
      <Stats
        recalledForCount={recalledForCount}
        id={id}
      />
    </div>
  );
};

export default Flashcard;
