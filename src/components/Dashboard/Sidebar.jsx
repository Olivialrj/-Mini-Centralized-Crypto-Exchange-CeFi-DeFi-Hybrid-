import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 p-6 hidden md:block">
      <h2 className="text-2xl font-bold mb-8">MiniExchange</h2>
      <nav className="flex flex-col space-y-4">
        <Link className="hover:text-purple-400 transition" to="/dashboard">
          Dashboard
        </Link>
        <Link
          to="/dashboard/wallet"
          className="hover:text-purple-400 transition"
        >
          Wallet
        </Link>
        <Link
          className="hover:text-purple-400 transition"
          to="/dashboard/portfolio"
        >
          Trade
        </Link>
        <Link
          className="hover:text-purple-400 transition"
          to="/dashboard/portfolio"
        >
          Portfolio
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
