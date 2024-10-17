import { Outlet } from "react-router-dom";
import { ModeToggle } from "./components/ui/mode-toggle";

const Layout = () => {
  return (
    <div className="h-screen">
      <Outlet />
      <div className="z-50 fixed top-1 md:top-6 right-5">
        <ModeToggle />
      </div>
    </div>
  );
};

export default Layout;
