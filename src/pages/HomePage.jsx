import Features from "../components/Features";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import MarketOverview from "../components/MarketOverview";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      {" "}
      <Header />
      <main className="flex-grow">
        <Hero />
        <MarketOverview />
        <Features />
      </main>
      <Footer />
    </div>
  );
};
export default HomePage;
