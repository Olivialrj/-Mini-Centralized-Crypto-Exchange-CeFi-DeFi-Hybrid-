// import { FaLaptopCode } from "react-icons/fa"; // laptop icon from react-icons
// import { useState, useEffect } from "react";
// const getRandomPrice = (base) => {
//   const change = (Math.random() - 0.5) * 0.02;
//   return +(base * (1 + change)).toFixed(2);
// };

// const MarketOverview = () => {
//   const [prices, setPrices] = useState({
//     BTC: 65000,
//     ETH: 3500,
//     SOL: 130,
//   });

//   const [prevPrices, setPrevPrices] = useState(prices);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setPrevPrices(prices);
//       setPrices({
//         BTC: getRandomPrice(prices.BTC),
//         ETH: getRandomPrice(prices.ETH),
//         SOL: getRandomPrice(prices.SOL),
//       });
//     }, 2000);

//     return () => clearInterval(interval);
//   }, [prices]);
//   return (
//     <section className=" p-6 py-20 bg-gray-900 text-center text-white rounded-lg max-w-3xl mx-auto shadow-lg">
//       <div className="flex items-center justify-center mb-6 gap-4">
//         <FaLaptopCode className="text-purple-500 text-5xl" />
//         <h2 className="text-3xl font-extrabold">Live Market Prices</h2>
//       </div>

//       <div className="flex justify-center gap-6">
//         {Object.entries(prices).map(([symbol, value]) => {
//           const prev = prevPrices[symbol];
//           const isUp = value > prev;
//           const isDown = value < prev;

//           return (
//             <div
//               key={symbol}
//               className={`bg-gradient-to-tr from-purple-700 to-purple-900 p-6 m-6 rounded-xl shadow-lg w-40 transition transform hover:scale-105`}
//             >
//               <div className="text-xl font-semibold">{symbol}</div>
//               <div
//                 className={`text-2xl mt-2 font-bold transition-all duration-500 ${
//                   isUp
//                     ? "text-green-400 scale-105"
//                     : isDown
//                     ? "text-red-400 scale-95"
//                     : ""
//                 }`}
//               >
//                 ${value.toLocaleString()}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default MarketOverview;
import { useEffect, useState } from "react";

const coins = [
  { symbol: "BTC", name: "Bitcoin", price: 65000, change: 1.2 },
  { symbol: "ETH", name: "Ethereum", price: 3500, change: -0.8 },
  { symbol: "SOL", name: "Solana", price: 130, change: 2.5 },
];

const coinIcons = {
  BTC: (
    <svg
      className="w-10 h-10 text-yellow-400"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="10" />
      <text
        x="12"
        y="16"
        textAnchor="middle"
        fontWeight="bold"
        fontSize="12"
        fill="black"
      >
        ₿
      </text>
    </svg>
  ),
  ETH: (
    <svg
      className="w-10 h-10 text-gray-300"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <polygon points="12 2 19 9 12 16 5 9 12 2" />
      <polygon
        points="12 16 19 23 12 28 5 23 12 16"
        fill="rgba(255,255,255,0.3)"
      />
    </svg>
  ),
  SOL: (
    <svg
      className="w-10 h-10 text-purple-500"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <rect x="5" y="5" width="14" height="14" rx="4" ry="4" />
    </svg>
  ),
};

const MarketOverview = () => {
  const [prices, setPrices] = useState(coins);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrices((prev) =>
        prev.map((coin) => {
          const randomChange = (Math.random() - 0.5) * 2;
          const newPrice = +(coin.price * (1 + randomChange / 100)).toFixed(2);
          return {
            ...coin,
            price: newPrice,
            change: +randomChange.toFixed(2),
          };
        })
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-40 bg-gray-900 text-gray-200">
      <h2 className="text-3xl font-semibold mb-10 text-center">
        Live Market Prices
      </h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {prices.map(({ symbol, name, price, change }) => {
          const isPositive = change >= 0;
          return (
            <div
              key={symbol}
              className="flex flex-col items-center p-6 border border-gray-700 rounded-lg shadow-md hover:shadow-purple-600 transition-shadow bg-gray-800"
            >
              <div>{coinIcons[symbol]}</div>
              <h3 className="mt-4 text-xl font-bold">{symbol}</h3>
              <p className="text-gray-400">{name}</p>
              <p className="mt-2 text-2xl font-semibold">
                ${price.toLocaleString()}
              </p>
              <p
                className={`mt-1 font-medium ${
                  isPositive ? "text-green-400" : "text-red-400"
                }`}
              >
                {isPositive ? "+" : ""}
                {change}%
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MarketOverview;
