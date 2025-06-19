import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const timeframes = ["30m", "1h", "4h", "1d", "7d"];

const balanceData = {
  "30m": [
    { time: "0m", balance: 25300 },
    { time: "10m", balance: 25350 },
    { time: "20m", balance: 25280 },
    { time: "30m", balance: 25320 },
  ],
  "1h": [
    { time: "0m", balance: 25000 },
    { time: "15m", balance: 25100 },
    { time: "30m", balance: 25250 },
    { time: "45m", balance: 25400 },
    { time: "60m", balance: 25320 },
  ],
  "4h": [
    { time: "0h", balance: 23000 },
    { time: "1h", balance: 23500 },
    { time: "2h", balance: 24500 },
    { time: "3h", balance: 25000 },
    { time: "4h", balance: 25320 },
  ],
  "1d": [
    { time: "0h", balance: 22000 },
    { time: "6h", balance: 23000 },
    { time: "12h", balance: 24000 },
    { time: "18h", balance: 25000 },
    { time: "24h", balance: 25320 },
  ],
  "7d": [
    { time: "Day 1", balance: 20000 },
    { time: "Day 2", balance: 21500 },
    { time: "Day 3", balance: 22500 },
    { time: "Day 4", balance: 24000 },
    { time: "Day 5", balance: 24500 },
    { time: "Day 6", balance: 25000 },
    { time: "Day 7", balance: 25320 },
  ],
};

const TotalBalance = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState("1d");
  const data = balanceData[selectedTimeframe];

  // Calculate gain/loss
  const firstBalance = data[0].balance;
  const lastBalance = data[data.length - 1].balance;
  const diff = lastBalance - firstBalance;
  const gain = diff >= 0;

  return (
    <section className="bg-gray-800 rounded-xl p-6 shadow-md w-full max-w-md mx-auto">
      <h2 className="text-lg text-gray-400">Total Balance</h2>
      <p className="text-3xl font-bold mt-2 text-white">
        ${lastBalance.toLocaleString()}
      </p>

      <div className="flex gap-2 my-4">
        {timeframes.map((tf) => (
          <button
            key={tf}
            className={`px-3 py-1 rounded-md text-sm font-medium transition ${
              selectedTimeframe === tf
                ? "bg-purple-600 text-white"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
            onClick={() => setSelectedTimeframe(tf)}
          >
            {tf}
          </button>
        ))}
      </div>

      <div className="h-40">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="time" stroke="#aaa" />
            <YAxis stroke="#aaa" domain={["auto", "auto"]} />
            <Tooltip
              contentStyle={{ backgroundColor: "#1f2937", border: "none" }}
            />
            <Line
              type="monotone"
              dataKey="balance"
              stroke={gain ? "#22c55e" : "#ef4444"} // green or red
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <p
        className={`mt-2 font-semibold ${
          gain ? "text-green-400" : "text-red-400"
        }`}
      >
        {gain ? "+" : ""}
        {diff.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}{" "}
        USD
      </p>
      <p className="text-gray-500 text-sm">
        {gain ? "Gained" : "Lost"} in the last {selectedTimeframe}
      </p>
    </section>
  );
};

export default TotalBalance;
