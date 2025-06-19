import Sidebar from "../components/Dashboard/Sidebar";
import Header from "../components/Dashboard/Header";
import TotalBalance from "../components/Dashboard/TotalBalance";
import PerformanceChart from "../components/Dashboard/PerformanceChart";
import Watchlist from "../components/Dashboard/Watchlist";

const DashboardHome = () => {
  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header />

        <main className="p-6 space-y-8 overflow-y-auto">
          {/* Total Balance */}
          <TotalBalance />

          {/* Grid: Portfolio & Chart */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Watchlist />
            <PerformanceChart />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardHome;
