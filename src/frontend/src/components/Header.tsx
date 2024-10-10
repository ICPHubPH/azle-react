
import { ModeToggle } from "./mode-toggle";
const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="flex justify-between items-center">
        <div className="logo">
          <h1 className="text-lg font-bold">ISKOLAR PH</h1>
        </div>
        <div className="nav-lists flex space-x-8">
          <ul className="list-none flex space-x-4">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#about" className="hover:underline">Testimony</a></li>
            <li><a href="#services" className="hover:underline">Providers</a></li>        <ModeToggle/>

          </ul>
        </div>
        
      </nav>
    </header>
  );
};

export default Header;
