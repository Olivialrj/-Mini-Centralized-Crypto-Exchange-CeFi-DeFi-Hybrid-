import { useState } from "react";

const Transfer = () => {
  const [mode, setMode] = useState("buy");
  const [fromCoin, setFromCoin] = useState("BTC");
  const [toCoin, setToCoin] = useState("ETH");
  const [fromAmount, setFromAmount] = useState("");
  const [toAmount, setToAmount] = useState("");

  const coins = ["BTC", "ETH", "SOL", "USDT", "Wallet"];
  const walletBalanceUSD = 10000; // Dummy balance

  const handleFromAmountChange = (e) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value)) {
      setFromAmount(value > walletBalanceUSD ? walletBalanceUSD : value);
    } else {
      setFromAmount("");
    }
  };

  const handleExchange = (e) => {
    e.preventDefault();
    console.log({
      mode,
      from: { coin: fromCoin, amount: fromAmount },
      to: { coin: toCoin, amount: toAmount },
    });
  };

  return (
    <section className="bg-gray-900 p-6 rounded-xl shadow-md max-w-xl w-full mx-auto">
      {/* Header and toggle */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-white">Exchange</h2>
        <div className="flex items-center bg-gray-800 rounded-md overflow-hidden">
          <button
            onClick={() => setMode("buy")}
            className={`px-4 py-2 text-sm font-medium ${
              mode === "buy" ? "bg-purple-600 text-white" : "text-gray-400"
            }`}
          >
            Buy
          </button>
          <button
            onClick={() => setMode("sell")}
            className={`px-4 py-2 text-sm font-medium ${
              mode === "sell" ? "bg-purple-600 text-white" : "text-gray-400"
            }`}
          >
            Sell
          </button>
        </div>
      </div>

      <form onSubmit={handleExchange} className="space-y-5">
        {/* FROM Row */}
        <div className="flex items-center gap-4">
          <label className="text-sm text-gray-400 w-16">From:</label>
          <div className="flex justify-between bg-gray-800 border-gray-700  w-full">
            <select
              value={fromCoin}
              onChange={(e) => setFromCoin(e.target.value)}
              className="w-1/3 p-2 rounded text-white"
            >
              {coins.map((coin) => (
                <option key={coin} value={coin}>
                  {coin}
                </option>
              ))}
            </select>
            <input
              type="number"
              value={fromAmount}
              onChange={handleFromAmountChange}
              max={walletBalanceUSD}
              min="0"
              placeholder={`Max $${walletBalanceUSD.toLocaleString()}`}
              className="w-1/2 p-2 rounded text-white text-end"
            />
          </div>
        </div>

        {/* TO Row */}
        <div className="flex items-center gap-4">
          <label className="text-sm text-gray-400 w-16">To:</label>
          <div className="flex justify-between bg-gray-800 border-gray-700  w-full">
            <select
              value={toCoin}
              onChange={(e) => setToCoin(e.target.value)}
              className="w-1/3 p-2 rounded  text-white"
            >
              {coins.map((coin) => (
                <option key={coin} value={coin}>
                  {coin}
                </option>
              ))}
            </select>
            <input
              type="number"
              value={toAmount}
              onChange={(e) => setToAmount(e.target.value)}
              placeholder="Amount"
              className="w-1/2 p-2 rounded text-white text-end"
            />
          </div>
        </div>

        {/* Exchange Button */}
        <button
          type="submit"
          className="w-full py-2 rounded bg-purple-600 hover:bg-purple-700 text-white font-medium transition cursor-pointer"
          style={{
            backgroundColor: "#805ad5" /* Tailwind purple-600 hex */,
            backgroundImage: "none",
            cursor: "pointer",
          }}
        >
          Exchange Now
        </button>
      </form>
    </section>
  );
};

export default Transfer;
