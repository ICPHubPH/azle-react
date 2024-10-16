import { Outlet } from "react-router-dom";
import ToggleSwitch from "./components/ui/ToggleSwitch";
import { Navigation } from "./Navigation";
import { ModeToggle } from "./components/ui/mode-toggle";

const Layout = () => {
  return (
    <div className="h-screen">
      <Navigation>
        <Outlet />
        <div className="fixed bottom-5 right-5">
          <ModeToggle />
        </div>
      </Navigation>
    </div>
  );
};

export default Layout;
