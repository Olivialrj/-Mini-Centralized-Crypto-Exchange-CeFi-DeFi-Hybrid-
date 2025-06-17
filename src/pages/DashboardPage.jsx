// src/pages/Dashboard.tsx
import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import axiosInstance from "../api/axiosInstance";

export default function DashboardPage() {
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

  );
}
