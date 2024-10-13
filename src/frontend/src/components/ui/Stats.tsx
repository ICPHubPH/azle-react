// interaction buttons
import { FaFire } from "react-icons/fa";
import { IconContext } from "react-icons";
import "./Stats.module.css";

interface StatsProps {
  recalledForCount: number;
}

const Stats: React.FC<StatsProps> = ({ recalledForCount }) => {
  return (
    <IconContext.Provider value={{ color: "black", size: "2.5rem" }}>
      <div className="flex items-center justify-center flex-col">
        <FaFire className="hover:scale-125 cursor-pointer" />
        <p>Recalled {recalledForCount}x</p>
      </div>
    </IconContext.Provider>
  );
};

export default Stats;
