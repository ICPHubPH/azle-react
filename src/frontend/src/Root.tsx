import { Outlet } from "react-router-dom";
import ToggleSwitch from "./components/ui/ToggleSwitch";

const Layout = () => {
  return (
    <div className="h-screen">
      <header className=" min-h-12 flex items-center justify-center">
        <nav className="flex gap-5">
          <a href="/">Home</a>
          <a href="/create">Create</a>
          <a href="/login">Login</a>
          <a href="/signup">Signup</a>
          <ToggleSwitch />
        </nav>
      </header>
      <main className="min-h-[calc(100vh-3rem)]">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
