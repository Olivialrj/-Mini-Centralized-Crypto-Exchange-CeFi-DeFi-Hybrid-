import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchWalletBalance } from "../../features/WalletSlice";

const dummyHoldings = [
  { name: "BTC", amount: 0.75, usdValue: 45000, change24h: "+2.3%" },
  { name: "ETH", amount: 10, usdValue: 3500, change24h: "-0.8%" },
  { name: "SOL", amount: 200, usdValue: 6000, change24h: "+5.1%" },
];

const COLORS = ["#8b5cf6", "#10b981", "#f59e0b"];

export default function WalletOverview() {
  const dispatch = useDispatch();
  const { balance, holdings, status } = useSelector((state) => state.wallet);

  useEffect(() => {
    dispatch(fetchWalletBalance());
  }, [dispatch]);

  const totalUsd = holdings.reduce((sum, c) => sum + c.usdValue, 0);
  const chartData = holdings.map((c) => ({ name: c.name, value: c.usdValue }));

  return (
    <section className="bg-gray-900 p-8 rounded-xl shadow-md w-full max-w-4xl mx-auto space-y-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-start gap-8">
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-white">Wallet Balance</h2>
          <p className="text-4xl font-bold text-white mt-1">
            ${totalUsd.toLocaleString()}
          </p>
          <div className="text-sm text-gray-400">
            {" "}
            ETH Balance: {status === "loading" ? "Loading..." : balance}
          </div>
          <span className="text-green-500 text-sm">+2.1% today</span>
        </div>

        <div className=" w-48 h-48 flex-1 flex justify-center items-center overflow-visible">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={dummyHoldings}
                dataKey="usdValue"
                outerRadius={80}
                label
              >
                {dummyHoldings.map((entry, index) => (
                  <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{ backgroundColor: "#1f2937", border: "none" }}
                labelStyle={{ color: "#ccc" }}
                itemStyle={{ color: "#fff" }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-gray-800 rounded-lg p-4">
        <h3 className="text-lg font-medium text-white mb-2">Your Holdings</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {dummyHoldings.map((coin) => (
            <div
              key={coin.name}
              className="bg-gray-700 p-3 rounded-md flex flex-col space-y-1"
            >
              <span className="text-white font-semibold">{coin.name}</span>
              <span className="text-gray-300 text-sm">{coin.amount} coins</span>
              <span className="text-white">
                ${coin.usdValue.toLocaleString()}
              </span>
              <span
                className={`text-xs ${
                  coin.change24h.startsWith("+")
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {coin.change24h} (24h)
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-4 mt-4">
        {["Deposit", "Withdraw", "Transfer"].map((label) => (
          <button
            key={label}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-md font-medium shadow transition"
          >
            {label}
          </button>
        ))}
      </div>
    </section>
  );
}
