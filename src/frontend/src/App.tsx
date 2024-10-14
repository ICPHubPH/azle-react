import { AnimatePresence } from "framer-motion";
import Home from "./components/ui/Home";

function App() {
  return (
    <AnimatePresence>
      <div>
        <Home />
      </div>
    </AnimatePresence>
  );
}

export default App;
