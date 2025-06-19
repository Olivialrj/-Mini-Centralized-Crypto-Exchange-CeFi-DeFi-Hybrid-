const Header = () => {
  return (
    <header className="bg-gray-850 px-6 py-4 border-b border-gray-700 flex justify-between items-center">
      <h1 className="text-xl font-semibold">Welcome Back 👋</h1>
      <div className="flex items-center gap-4">
        <button className="text-sm text-gray-400 hover:text-white">🔔</button>
        <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-sm">
          U
        </div>
      </div>
    </header>
  );
};

export default Header;
