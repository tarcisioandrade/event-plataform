import { Link } from "react-router-dom";
import { Logo } from "./Logo";

const Header = () => {
  return (
    <header className="w-full py-5 flex items-center justify-center bg-gray-700 border-b border-gray-600 h-[75px] fixed z-40">
      <Link to="/event">
        <Logo />
      </Link>
    </header>
  );
};

export default Header;
