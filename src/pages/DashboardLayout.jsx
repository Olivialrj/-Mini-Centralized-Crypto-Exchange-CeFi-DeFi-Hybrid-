import Header from "../components/Dashboard/Header";
import TotalBalance from "../components/Dashboard/TotalBalance";
import Watchlist from "../components/Dashboard/Watchlist";
import PerformanceChart from "../components/Dashboard/PerformanceChart";
import Transfer from "../components/Dashboard/Transfer";

const DashboardLayout = () => {
  return (
    <div className="flex-1 flex flex-col min-h-screen bg-gray-900 text-white">
      {/* Sticky Header */}
      <Header className="sticky top-0 z-10 bg-gray-900" />

      {/* Main Content */}
      <main className="flex-1 p-6 space-y-8 overflow-y-auto">
        {/* Total Balance */}
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-6">
          <TotalBalance />
          <Watchlist />
        </div>
        {/* Charts Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <PerformanceChart />
          <Transfer />
          {/* Add any other charts or components here */}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
