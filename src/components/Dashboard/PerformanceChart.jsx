import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { useState, useEffect } from "react";

const timeframeToDays = {
  "1H": 1,
  "3H": 1,
  "1D": 1,
  "1W": 7,
  "1M": 30,
};

const timeframes = ["1H", "3H", "1D", "1W", "1M"];

const PerformanceChart = () => {
  const [selectedCoin, setSelectedCoin] = useState("bitcoin"); // default
  const [selectedTimeframe, setSelectedTimeframe] = useState("1D");
  const [coins, setCoins] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch top coins list
  useEffect(() => {
    async function loadCoins() {
      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1"
        );
        const data = await res.json();
        setCoins(data);
      } catch (error) {
        console.error(error);
      }
    }
    loadCoins();
  }, []);

  // Fetch chart data
  useEffect(() => {
    async function fetchPrices() {
      setLoading(true);
      try {
        const days = timeframeToDays[selectedTimeframe];
        const res = await fetch(
          `https://api.coingecko.com/api/v3/coins/${selectedCoin}/market_chart?vs_currency=usd&days=${days}`
        );
        const data = await res.json();
        setChartData(
          data.prices.map(([time, price]) => ({
            name:
              selectedTimeframe === "1H" || selectedTimeframe === "3H"
                ? new Date(time).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })
                : new Date(time).toLocaleDateString([], {
                    month: "short",
                    day: "numeric",
                  }),
            price: price,
          }))
        );
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchPrices();
  }, [selectedCoin, selectedTimeframe]);

  return (
    <section className="bg-gray-800 rounded-xl p-6 shadow-md text-white min-h-[500px]">
      <div className="flex flex-wrap items-center justify-between mb-4 gap-4">
        {/* Coin selector */}
        <div className="flex gap-2 flex-wrap">
          {coins.map((coinObj) => (
            <button
              key={coinObj.id}
              className={`px-3 py-1 rounded-md text-sm font-medium transition ${
                selectedCoin === coinObj.id
                  ? "bg-purple-600 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
              onClick={() => setSelectedCoin(coinObj.id)}
            >
              {coinObj.symbol.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Timeframe selector */}
        <div className="flex gap-2 flex-wrap">
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
      </div>

      <div className="h-80">
        {loading ? (
          <div className="text-center mt-20 text-gray-400">
            Loading chart...
          </div>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              key={`${selectedCoin}--${selectedTimeframe}`}
              data={chartData}
            >
              <CartesianGrid stroke="#444" strokeDasharray="3 3" />
              <XAxis dataKey="name" stroke="#aaa" interval={55} />
              <YAxis stroke="#aaa" domain={["auto", "auto"]} />
              <Tooltip
                contentStyle={{ backgroundColor: "#1f2937", border: "none" }}
              />
              <Line
                type="monotone"
                dataKey="price"
                stroke="#8b5cf6"
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </div>
    </section>
  );
};

export default PerformanceChart;
