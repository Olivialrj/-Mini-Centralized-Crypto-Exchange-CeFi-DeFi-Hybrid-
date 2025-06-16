import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-4">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-xl font-semibold text-purple-400">
          MiniCryptoExchange
        </div>

        {/* Navigation links - evenly spaced and centered */}
        <div className="flex flex-1 justify-center gap-8 text-base font-medium">
          <a href="#" className="hover:text-purple-300">
            Home
          </a>
          <a href="#" className="hover:text-purple-300">
            Features
          </a>
          <a href="#" className="hover:text-purple-300">
            About
          </a>
        </div>

        {/* Auth buttons */}
        <div className="flex gap-4 text-base">
          <Link
            to="/login"
            className="bg-gray-800 px-4 py-2 rounded hover:bg-gray-700"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-purple-600 px-4 py-2 rounded hover:bg-purple-500"
          >
            Sign Up
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
