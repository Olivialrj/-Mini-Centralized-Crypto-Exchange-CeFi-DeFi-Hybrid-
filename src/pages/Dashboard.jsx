// src/pages/Dashboard.tsx
import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import axiosInstance from "../api/axiosInstance";

export default function Dashboard() {
  const [wallets, setWallets] = useState([]);
  const [tickers, setTickers] = useState([]);
  const [trades, setTrades] = useState([]);

  const { logout } = useAuth();
  const handleLogout = () => {
    logout();
    window.location.href = "/login"; // Redirect to login page after logout
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [walletRes, tickerRes, tradeRes] = await Promise.all([
          axiosInstance.get("/wallets"),
          axiosInstance.get("/tickers"),
          axiosInstance.get("/trades"),
        ]);
        setWallets(walletRes.data);
        setTickers(tickerRes.data);
        setTrades(tradeRes.data);
      } catch (error) {
        console.error("Error loading dashboard data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
      {/* Wallet Balances */}
      <div>
        <h2 className="text-xl font-medium mb-2">Wallet Balances</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {wallets.map((wallet) => (
            <div
              key={wallet.currency}
              className="p-4 bg-gray-100 rounded shadow"
            >
              <p className="font-semibold">{wallet.currency}</p>
              <p>{wallet.balance}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Price Tickers */}
      <div>
        <h2 className="text-xl font-medium mb-2">Current Prices</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {tickers.map((ticker) => (
            <div key={ticker.symbol} className="p-4 bg-blue-100 rounded shadow">
              <p className="font-semibold">{ticker.symbol}</p>
              <p>${ticker.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Trade History */}
      <div>
        <h2 className="text-xl font-medium mb-2">Trade History</h2>
        <div className="overflow-auto rounded shadow">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2 text-left">Symbol</th>
                <th className="px-4 py-2 text-left">Quantity</th>
                <th className="px-4 py-2 text-left">Price</th>
                <th className="px-4 py-2 text-left">Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {trades.map((trade) => (
                <tr key={trade.id} className="border-t">
                  <td className="px-4 py-2">{trade.symbol}</td>
                  <td className="px-4 py-2">{trade.quantity}</td>
                  <td className="px-4 py-2">${trade.price.toFixed(2)}</td>
                  <td className="px-4 py-2">
                    {new Date(trade.timestamp).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
