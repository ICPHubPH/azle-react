import { useState } from "react";
import { motion } from "framer-motion";
import Stats from "../Stats/Stats";

interface FlashcardProps {
  front: string;
  back: string;
  recalledForCount: number;
  id: number;
}

const Flashcard: React.FC<FlashcardProps> = ({
  front,
  back,
  recalledForCount,
  id,
}: FlashcardProps) => {
  const [flipCard, setFlipCard] = useState<boolean>(false);

  return (
    <div className="relative w-full h-full snap-start flex items-end justify-center text-center text-lg gap-4 py-0 sm:p-3 bg-background">
      <motion.div
        initial={{ rotateY: 180 }}
        animate={{ rotateY: flipCard ? 0 : 180 }}
        transition={{ duration: 0.8, type: "spring" }}
        className={`${
          flipCard
            ? "font-black bg-foreground text-background"
            : "font-sans bg-background text-foreground"
        } h-full flex items-center justify-center px-14 py-2.5 sm:shadow-[rgba(0,0,0,0.02)_0px_1px_3px_0px,rgba(27,31,35,0.15)_0px_0px_0px_1.5px] w-full sm:w-[28rem]`}
        onClick={() => setFlipCard(!flipCard)}
      >
        <motion.div
          animate={{ rotateY: flipCard ? 0 : 180 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          {flipCard ? back : front}
        </motion.div>
      </motion.div>
      <div className="absolute bottom-0 right-0 sm:static">
        <Stats
          recalledForCount={recalledForCount}
          id={id}
        />
      </div>
    </div>
  );
};

export default Flashcard;
