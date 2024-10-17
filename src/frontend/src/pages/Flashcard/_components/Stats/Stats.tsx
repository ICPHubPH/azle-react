import { CiRedo, CiCircleQuestion, CiSquareCheck } from "react-icons/ci";
import { PiStackSimpleLight } from "react-icons/pi";
import { FaSquareCheck } from "react-icons/fa6";
import { IconContext } from "react-icons";
import useFlashcardStore from "@/store/useFlashcardStore";
import StatsIcon from "./StatIcon";
import Modal from "./Modal";
import { useState } from "react";

interface StatsProps {
  recalledForCount: number;
  id: number;
}

const Stats: React.FC<StatsProps> = ({ recalledForCount, id }) => {
  const [isRecalled, setIsRecalled] = useState<boolean>(false);
  const { redo, redoCards } = useFlashcardStore();

  const decrementRecalledForCount = useFlashcardStore(
    (state) => state.decrementRecalledForCount
  );

  const incrementRecalledForCount = useFlashcardStore(
    (state) => state.incrementRecalledForCount
  );

  const getHint = useFlashcardStore((state) => state.getHint(id));
  const getIsRedo = useFlashcardStore((state) => state.getIsRedo(id));
  const [redoCardsLength, setRedoCardsLength] = useState<number>(
    redoCards.length
  );

  function onClickRecalledForCount() {
    if (isRecalled) decrementRecalledForCount(id);
    if (!isRecalled) incrementRecalledForCount(id);
    setIsRecalled(!isRecalled);
  }

  function onRedo() {
    redo(id);
    setRedoCardsLength(redoCardsLength + 1);
  }

  const iconLabel = "leading-4 text-[.8rem] text-secondary-foreground";

  return (
    <IconContext.Provider value={{ color: "gray", size: "1.8rem" }}>
      <div className="flex flex-col gap-2 mb-3 sm:mb-5 font-sans mx-2">
        <StatsIcon onClick={onClickRecalledForCount}>
          {isRecalled ? <FaSquareCheck /> : <CiSquareCheck />}
          <p className={iconLabel}>
            Recalled <br /> {recalledForCount}&times;
          </p>
        </StatsIcon>
        <StatsIcon>
          <Modal
            content={getHint}
            title="Hint"
          >
            <CiCircleQuestion />
            <p className={iconLabel}>Hint</p>
          </Modal>
        </StatsIcon>
        {!getIsRedo ? (
          <StatsIcon onClick={() => onRedo()}>
            <CiRedo />
            <p className={iconLabel}>Redo</p>
          </StatsIcon>
        ) : null}
        <IconContext.Provider value={{ color: "gray", size: "1.7rem" }}>
          <span className="flex items-center justify-center flex-col mt-10">
            <PiStackSimpleLight />
            <p className={iconLabel}>
              ({redoCards.length}){" "}
              {redoCards.length <= 1 ? (
                <>
                  Redo
                  <br />
                  Card
                </>
              ) : (
                <>
                  Redo
                  <br />
                  Cards
                </>
              )}
            </p>
          </span>
        </IconContext.Provider>
      </div>
    </IconContext.Provider>
  );
};

export default Stats;
