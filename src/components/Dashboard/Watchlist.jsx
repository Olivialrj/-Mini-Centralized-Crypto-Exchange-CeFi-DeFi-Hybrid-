import { useState, useEffect } from "react";
import {
  DndContext,
  closestCenter,
  useSensor,
  useSensors,
  PointerSensor,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function SortableCoin({ coin }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: coin.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    cursor: isDragging ? "grabbing" : "grab",
  };

  function getPriceColor(price) {
    if (price > 1000) return "text-green-400";
    if (price > 100) return "text-yellow-400";
    return "text-red-400";
  }

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      style={style}
      className={`w-48 min-w-[16rem] min-h-[12rem] p-4 bg-gray-800 rounded-md shadow-md text-white flex flex-col items-center justify-center select-none
        ${isDragging ? "opacity-80" : "opacity-100"} 
        hover:shadow-lg hover:border-purple-500 border border-transparent transition-all relative`}
    >
      {/* Drag Handle */}
      <div
        {...listeners}
        className="absolute top-2 left-2 cursor-grab text-gray-400 hover:text-purple-500"
        aria-label="Drag handle"
      >
        {/* Hamburger Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-4 h-4 mb-2 text-gray-500"
        >
          <path
            d="M4 8h16M4 16h16"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
      {/* Coin Image */}
      <img
        src={coin.image}
        alt={coin.name}
        className="w-10 h-10 mb-2 rounded-full"
      />
      <h3 className="text-lg font-semibold">{coin.symbol.toUpperCase()}</h3>
      <p className="text-sm text-gray-400">{coin.name}</p>
      <p className={`mt-2 font-bold ${getPriceColor(coin.current_price)}`}>
        ${coin.current_price.toLocaleString()}
      </p>{" "}
    </div>
  );
}

export default function FavoriteCoins() {
  const [coins, setCoins] = useState([]);

  const sensors = useSensors(useSensor(PointerSensor));

  useEffect(() => {
    async function fetchCoins() {
      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
        );
        const data = await res.json();
        // Use only a few favorite coins or the first few for demo
        const favorites = data.filter((coin) =>
          ["bitcoin", "ethereum", "solana", "dogecoin"].includes(coin.id)
        );
        setCoins(favorites);
      } catch (error) {
        console.error("Failed to fetch coins:", error);
      }
    }
    fetchCoins();
  }, []);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      setCoins((prev) => {
        const oldIndex = prev.findIndex((c) => c.id === active.id);
        const newIndex = prev.findIndex((c) => c.id === over.id);
        return arrayMove(prev, oldIndex, newIndex);
      });
    }
  };

  if (coins.length === 0) {
    return (
      <section className="bg-gray-900 p-6 rounded-xl shadow-md w-full max-w-sm text-white">
        Loading favorite coins...
      </section>
    );
  }

  return (
    <section className="bg-gray-900 p-6 rounded-xl shadow-md w-full max-w-2xl mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-white">
        Your Favorite Coins
      </h2>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={coins} strategy={verticalListSortingStrategy}>
          {/* Responsive 2-column grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {coins.map((coin) => (
              <SortableCoin key={coin.id} coin={coin} />
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </section>
  );
}
