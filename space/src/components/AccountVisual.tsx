"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface AccountField {
  name: string;
  value: string;
  description: string;
}

interface AccountVisualProps {
  title: string;
  address: string;
  fields: AccountField[];
  delay?: number;
}

export function AccountVisual({
  title,
  address,
  fields,
  delay = 0,
}: AccountVisualProps) {
  const [hoveredField, setHoveredField] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className="relative"
    >
      <div className="rounded-lg border border-card-border bg-card p-5 min-w-[260px]">
        {/* Account header */}
        <div className="mb-4 pb-3 border-b border-card-border">
          <div className="text-xs text-zinc-600 mb-1">Account</div>
          <div className="font-medium text-zinc-300">{title}</div>
          <div className="font-mono text-xs text-zinc-600 mt-1 truncate">
            {address}
          </div>
        </div>

        {/* Account fields */}
        <div className="space-y-2">
          {fields.map((field, index) => (
            <motion.div
              key={field.name}
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: delay + 0.05 + index * 0.05 }}
              className="relative"
              onMouseEnter={() => setHoveredField(field.name)}
              onMouseLeave={() => setHoveredField(null)}
            >
              <div
                className="flex items-center justify-between p-2 rounded transition-colors cursor-pointer"
                style={{
                  backgroundColor: hoveredField === field.name ? "rgba(63, 63, 70, 0.3)" : "transparent",
                }}
              >
                <span className="text-xs text-zinc-500">{field.name}</span>
                <span className="font-mono text-xs text-zinc-400">{field.value}</span>
              </div>

              {/* Tooltip */}
              {hoveredField === field.name && (
                <motion.div
                  initial={{ opacity: 0, y: 3 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute left-0 right-0 -bottom-11 z-10 p-2 rounded bg-zinc-800 text-xs text-zinc-400 shadow-lg"
                >
                  {field.description}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function WalletAccountVisual({ delay = 0 }: { delay?: number }) {
  return (
    <AccountVisual
      title="Wallet Account"
      address="7xKX...9fGh"
      delay={delay}
      fields={[
        {
          name: "lamports",
          value: "1,500,000,000",
          description: "Balance in lamports (1 SOL = 1 billion lamports)",
        },
        {
          name: "data",
          value: "[ ]",
          description: "Empty - wallet accounts don't store custom data",
        },
        {
          name: "owner",
          value: "System Program",
          description: "The System Program owns all wallet accounts",
        },
        {
          name: "executable",
          value: "false",
          description: "Wallets hold SOL, they don't run code",
        },
      ]}
    />
  );
}

export function ProgramAccountVisual({ delay = 0 }: { delay?: number }) {
  return (
    <AccountVisual
      title="Program Account"
      address="TokenkegQf...111"
      delay={delay}
      fields={[
        {
          name: "lamports",
          value: "1,141,440",
          description: "Minimum balance to keep the account alive (rent-exempt)",
        },
        {
          name: "data",
          value: "[bytecode...]",
          description: "Contains the compiled program bytecode (BPF)",
        },
        {
          name: "owner",
          value: "BPF Loader",
          description: "The BPF Loader owns all program accounts",
        },
        {
          name: "executable",
          value: "true",
          description: "This account contains runnable code",
        },
      ]}
    />
  );
}

export function DataAccountVisual({ delay = 0 }: { delay?: number }) {
  return (
    <AccountVisual
      title="Data Account"
      address="HnRs...4kLm"
      delay={delay}
      fields={[
        {
          name: "lamports",
          value: "2,039,280",
          description: "Rent payment to store data on-chain",
        },
        {
          name: "data",
          value: "[user data...]",
          description: "Stores application-specific data (e.g., NFT metadata)",
        },
        {
          name: "owner",
          value: "Your Program",
          description: "Only the owning program can modify this data",
        },
        {
          name: "executable",
          value: "false",
          description: "Data accounts store state, not code",
        },
      ]}
    />
  );
}
