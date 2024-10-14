// interaction buttons
import {
  CiRedo,
  CiCircleMore,
  CiCircleQuestion,
  CiSquareCheck,
} from "react-icons/ci";
import { PiStackSimpleLight } from "react-icons/pi";
import { FaSquareCheck } from "react-icons/fa6";
import { IconContext } from "react-icons";
import "./Stats.module.css";
import useFlashcardStore from "@/store/useFlashcardStore";
import StatsIcon from "./StatIcon";
import styles from "./Stats.module.css";
import { useState } from "react";
import Modal from "./Modal";

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

  return (
    <IconContext.Provider value={{ color: "black", size: "2.1rem" }}>
      <div className={`${styles.stats} flex flex-col gap-1 mb-5`}>
        <StatsIcon onClick={onClickRecalledForCount}>
          {isRecalled ? <FaSquareCheck /> : <CiSquareCheck />}
          <p className="leading-5 text-sm">
            Recalled <br></br>
            {recalledForCount}x
          </p>
        </StatsIcon>
        <StatsIcon>
          <Modal
            content={getHint}
            title="Hint"
          >
            <CiCircleQuestion />
            <p className="leading-5 text-sm">Hint</p>
          </Modal>
        </StatsIcon>
        {!getIsRedo ? (
          <StatsIcon onClick={(id) => onRedo()}>
            <CiRedo />
            <p className="leading-5 text-sm">Redo</p>
          </StatsIcon>
        ) : null}
        <IconContext.Provider value={{ color: "gray", size: "1.8rem" }}>
          <span className="flex items-center justify-center flex-col align-middle mt-10">
            <PiStackSimpleLight />
            <p className="leading-5 text-sm text-slate-500">
              ({redoCards.length}){" "}
              {redoCards.length <= 1 ? (
                <>
                  Redo<br></br>Card
                </>
              ) : (
                <>
                  Redo<br></br>Cards
                </>
              )}
            </p>
          </span>
        </IconContext.Provider>
        {/* <StatsIcon>
          <CiCircleMore />
        </StatsIcon> */}
      </div>
    </IconContext.Provider>
  );
};

export default Stats;
