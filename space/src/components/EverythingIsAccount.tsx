"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const items = [
  "Your Wallet",
  "A Smart Contract",
  "An NFT",
  "Your Token Balance",
  "A Game's State",
];

export function EverythingIsAccount() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % items.length);
        setIsAnimating(false);
      }, 250);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  const currentItem = items[activeIndex];

  return (
    <div className="flex flex-col items-center gap-6 py-6">
      {/* The thing */}
      <motion.div
        key={activeIndex}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: isAnimating ? 0 : 1, y: isAnimating ? 10 : 0 }}
        transition={{ duration: 0.25 }}
        className="flex flex-col items-center"
      >
        <span className="text-lg text-zinc-300">{currentItem}</span>
      </motion.div>

      {/* Arrow */}
      <motion.div
        animate={{ y: [0, 3, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="text-zinc-700"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </motion.div>

      {/* The account */}
      <div className="rounded-lg border border-card-border bg-card p-5 min-w-[200px]">
        <div className="text-center">
          <div className="text-xs text-zinc-600 mb-1">On Solana, this becomes</div>
          <div className="text-lg font-medium text-zinc-300">An Account</div>
          <div className="mt-4 space-y-1.5 text-left text-xs">
            <div className="flex justify-between text-zinc-600">
              <span>lamports</span>
              <span className="text-zinc-500">•</span>
            </div>
            <div className="flex justify-between text-zinc-600">
              <span>data</span>
              <span className="text-zinc-500">•</span>
            </div>
            <div className="flex justify-between text-zinc-600">
              <span>owner</span>
              <span className="text-zinc-500">•</span>
            </div>
            <div className="flex justify-between text-zinc-600">
              <span>executable</span>
              <span className="text-zinc-500">•</span>
            </div>
          </div>
        </div>
      </div>

      {/* Items indicator */}
      <div className="flex gap-1.5 mt-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-1.5 h-1.5 rounded-full transition-colors ${
              index === activeIndex ? "bg-zinc-400" : "bg-zinc-700"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
