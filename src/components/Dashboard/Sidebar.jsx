const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 p-6 hidden md:block">
      <h2 className="text-2xl font-bold mb-8">MiniExchange</h2>
      <nav className="space-y-4">
        <a href="#" className="block hover:text-purple-400">
          Dashboard
        </a>
        <a href="#" className="block hover:text-purple-400">
          Wallet
        </a>
        <a href="#" className="block hover:text-purple-400">
          Trade
        </a>
        <a href="#" className="block hover:text-purple-400">
          Portfolio
        </a>
        <a href="#" className="block hover:text-purple-400">
          Settings
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;
