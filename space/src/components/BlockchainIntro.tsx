"use client";

import { motion } from "framer-motion";

export function BlockchainIntro() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-6"
      >
        {/* Traditional database */}
        <div className="text-center">
          <p className="text-zinc-600 text-xs mb-3">Traditional Database</p>
          <motion.div
            className="relative"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <DatabaseIcon className="w-20 h-20 text-zinc-700" />
            <motion.div
              className="absolute -top-1 -right-1 bg-zinc-800 text-zinc-500 text-xs px-2 py-0.5 rounded border border-zinc-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              One owner
            </motion.div>
          </motion.div>
        </div>

        {/* Arrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-zinc-700"
        >
          <ArrowDownIcon className="w-5 h-5" />
        </motion.div>

        {/* Blockchain - distributed */}
        <div className="text-center">
          <p className="text-zinc-600 text-xs mb-3">Blockchain</p>
          <div className="flex gap-3 items-center justify-center">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + i * 0.1 }}
              >
                <DatabaseIcon className="w-14 h-14 text-zinc-500" />
              </motion.div>
            ))}
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="text-xs text-zinc-500 mt-3"
          >
            Same data, many copies, no single owner
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}

function DatabaseIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <ellipse cx="12" cy="6" rx="8" ry="3" />
      <path d="M4 6v6c0 1.657 3.582 3 8 3s8-1.343 8-3V6" />
      <path d="M4 12v6c0 1.657 3.582 3 8 3s8-1.343 8-3v-6" />
    </svg>
  );
}

function ArrowDownIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M12 5v14M5 12l7 7 7-7" />
    </svg>
  );
}
