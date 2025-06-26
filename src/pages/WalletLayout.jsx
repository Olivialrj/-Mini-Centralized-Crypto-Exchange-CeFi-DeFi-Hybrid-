import WalletOverview from "../components/Dashboard/WalletOverview";

const WalletLayout = () => {
  return (
    <div className="flex-1 flex flex-col min-h-screen bg-gray-900 text-white">
      <WalletOverview />
    </div>
  );
};

export default WalletLayout;
