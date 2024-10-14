// interaction buttons
import {
  CiRedo,
  CiCircleMore,
  CiCircleQuestion,
  CiSquareCheck,
} from "react-icons/ci";
import { FaSquareCheck } from "react-icons/fa6";
import { IconContext } from "react-icons";
import { motion } from "framer-motion";
import "./Stats.module.css";
import useFlashcardStore from "@/store/useFlashcardStore";
import StatsIcon from "./StatIcon";
import { useState } from "react";

interface StatsProps {
  recalledForCount: number;
  id: number;
}

const Stats: React.FC<StatsProps> = ({ recalledForCount, id }) => {
  const [isRecalled, setIsRecalled] = useState<boolean>(false);

  const incrementRecalledForCount = useFlashcardStore(
    (state) => state.incrementRecalledForCount
  );

  const decrementRecalledForCount = useFlashcardStore(
    (state) => state.decrementRecalledForCount
  );

  function onClickRecalledForCount() {
    if (isRecalled) decrementRecalledForCount(id);
    if (!isRecalled) incrementRecalledForCount(id);
    setIsRecalled(!isRecalled);
    console.log("Recalled for count: ", recalledForCount);
  }

  return (
    <IconContext.Provider value={{ color: "black", size: "2.5rem" }}>
      <div className="flex flex-col gap-4">
        <StatsIcon onClick={onClickRecalledForCount}>
          {isRecalled ? <FaSquareCheck /> : <CiSquareCheck />}
          <p className="leading-5 text-base">
            Recalled <br></br>
            {recalledForCount}x
          </p>
        </StatsIcon>
        <StatsIcon>
          <CiCircleQuestion />
          <p className="leading-5 text-base">Hint</p>
        </StatsIcon>
        <StatsIcon>
          <CiRedo />
          <p className="leading-5 text-base">
            Redo <br></br>Later
          </p>
        </StatsIcon>
        <StatsIcon>
          <CiCircleMore />
        </StatsIcon>
      </div>
    </IconContext.Provider>
  );
};

export default Stats;
