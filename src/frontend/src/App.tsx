import { AnimatePresence } from "framer-motion";
import Reels from "./components/pages/Reels";

function App() {
  return (
    <AnimatePresence>
      <div>
        <Reels />
      </div>
    </AnimatePresence>
  );
}

export default App;
