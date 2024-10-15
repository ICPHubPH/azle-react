import { useState } from "react";
import { motion } from "framer-motion";
import Stats from "../Stats/Stats";

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
    <div className="relative w-full h-full snap-start flex items-end justify-center text-center text-lg gap-4 pt-6 bg-background ">
      <motion.div
        initial={{ rotateY: 180 }}
        animate={{ rotateY: flipCard ? 0 : 360 }}
        transition={{ duration: 0.8, type: "spring" }}
        className={`${flipCard ? "font-black bg-foreground text-background" : "font-sans bg-background text-foreground"
          } h-full flex items-center justify-center px-6 py-2.5 md:shadow-[rgba(0,0,0,0.02)_0px_1px_3px_0px,rgba(27,31,35,0.15)_0px_0px_0px_1.5px] w-80`}
        onClick={() => setFlipCard(!flipCard)}
      >
        {flipCard ? back : front}
      </motion.div>
      <div className="absolute bottom-0 right-0 md:static">
        <Stats recalledForCount={recalledForCount} id={id} />
      </div>
    </div>
  );
};

export default Flashcard;
