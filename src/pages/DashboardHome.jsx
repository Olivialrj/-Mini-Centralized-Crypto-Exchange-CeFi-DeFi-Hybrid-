import Sidebar from "../components/Dashboard/Sidebar";
import { Outlet } from "react-router-dom";

const DashboardHome = () => {
  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <Sidebar />
      <main className="flex-1 p-6 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardHome;
