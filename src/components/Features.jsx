import Tilt from "react-parallax-tilt";

const features = [
  {
    title: "Buy & Sell Crypto",
    description:
      "Easily trade top cryptocurrencies with our intuitive interface.",
  },
  {
    title: "Real-Time Order Book",
    description: "Watch market movements live with our responsive order book.",
  },
  {
    title: "Secure Wallet",
    description:
      "Store assets safely with multi-layered protection and transparency.",
  },
];

const Features = () => {
  return (
    <section
      className="py-40 px-6 text-white"
      style={{
        backgroundImage:
          "radial-gradient(circle at center, #6b21a8, #000000 80%)",
      }}
    >
      {" "}
      <h2 className="text-4xl font-bold mb-16 text-center">What You Can Do</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {features.map((feature, idx) => (
          <Tilt
            key={idx}
            glareEnable={true}
            glareMaxOpacity={0.2}
            scale={1.03}
            transitionSpeed={1500}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            className="bg-gray-900/80 p-6 rounded-2xl shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Features;
