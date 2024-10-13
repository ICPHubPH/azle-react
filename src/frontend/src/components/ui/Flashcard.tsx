import { useState } from "react";
import styles from "./Flashcard.module.css";
import { motion, useSpring } from "framer-motion";
import Stats from "./Stats";

interface FlashcardProps {
  front: string;
  back: string;
  recalledForCount: number;
}

const Flashcard: React.FC<FlashcardProps> = ({
  front,
  back,
  recalledForCount,
}: FlashcardProps) => {
  const [flipCard, setFlipCard] = useState<boolean>(false);

  return (
    <div className={styles.flashcard}>
      <motion.div
        initial={{ rotateY: 180 }}
        animate={{ rotateY: flipCard ? 0 : 360 }}
        transition={{ duration: 0.6 }}
        className={`${flipCard ? styles.front : styles.back}`}
        onClick={() => setFlipCard(!flipCard)}
      >
        {flipCard ? back : front}
      </motion.div>
      <Stats recalledForCount={recalledForCount} />
    </div>
  );
};

export default Flashcard;
