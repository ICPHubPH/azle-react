import { Outlet } from "react-router-dom";
import ToggleSwitch from './components/ui/ToggleSwitch';

const Layout = () => {
  return (
    <div className="h-screen">
      <header>
        <h1>My App</h1>
        <nav>
          <a href="/">Home</a>
          <a href="/create">Create</a>
          <a href="/login">Login</a>
          <a href="/signup">Signup</a>
          <ToggleSwitch />
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>© 2023 My App</p>
      </footer>
    </div>
  );
};

export default Layout;
