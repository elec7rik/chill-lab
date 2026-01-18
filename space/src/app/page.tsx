"use client";

import { motion } from "framer-motion";
import { BlockchainIntro } from "@/components/BlockchainIntro";
import { EverythingIsAccount } from "@/components/EverythingIsAccount";
import {
  WalletAccountVisual,
  ProgramAccountVisual,
  DataAccountVisual,
} from "@/components/AccountVisual";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-card-border">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-medium text-foreground">
            Solana Visually
          </div>
          <div className="text-sm text-muted">The Account Model</div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-muted text-sm mb-4"
          >
            Chapter 1
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-semibold mb-6 text-foreground"
          >
            The Account Model
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted max-w-xl mx-auto"
          >
            The single most important concept in Solana. Understand this, and everything else clicks.
          </motion.p>
        </div>
      </section>

      {/* Section 1: What is a Blockchain */}
      <section className="py-20 px-6 border-t border-card-border">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            number="01"
            title="First, what's a blockchain?"
            subtitle="A 30-second refresher"
          />

          <div className="mt-12 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-zinc-400">
                A blockchain is a <span className="text-foreground">database</span> with a twist:
              </p>
              <ul className="space-y-4">
                <motion.li
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <span className="text-zinc-500 mt-1">—</span>
                  <span className="text-zinc-400">
                    <span className="text-foreground">No single owner.</span> Thousands of computers hold copies.
                  </span>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-zinc-500 mt-1">—</span>
                  <span className="text-zinc-400">
                    <span className="text-foreground">Tamper-proof.</span> Once data is written, it can't be secretly changed.
                  </span>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-zinc-500 mt-1">—</span>
                  <span className="text-zinc-400">
                    <span className="text-foreground">Public.</span> Anyone can read (and write, with the right rules).
                  </span>
                </motion.li>
              </ul>
              <p className="text-zinc-500 pt-4">
                So how does Solana organize all this data?
              </p>
            </div>
            <BlockchainIntro />
          </div>
        </div>
      </section>

      {/* Section 2: Everything is an Account */}
      <section className="py-20 px-6 border-t border-card-border bg-card/50">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            number="02"
            title="Everything is an Account"
            subtitle="The mental model that unlocks Solana"
          />

          <div className="mt-12 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-zinc-400">
                On Solana, <span className="text-foreground">everything</span> is stored in accounts:
              </p>
              <ul className="space-y-3 text-zinc-500">
                <li>Your wallet? <span className="text-zinc-300">An account.</span></li>
                <li>A smart contract? <span className="text-zinc-300">An account.</span></li>
                <li>An NFT's metadata? <span className="text-zinc-300">An account.</span></li>
                <li>Your token balance? <span className="text-zinc-300">An account.</span></li>
                <li>A game's leaderboard? <span className="text-zinc-300">An account.</span></li>
              </ul>
              <div className="pt-4 p-4 rounded-lg bg-card border border-card-border">
                <p className="text-sm text-zinc-500">
                  <span className="text-zinc-300">Analogy:</span> Think of Solana as a massive filing cabinet.
                  Every piece of information lives in its own labeled folder (account).
                  Programs, balances, NFTs—all are just different folders with different contents.
                </p>
              </div>
            </div>
            <EverythingIsAccount />
          </div>
        </div>
      </section>

      {/* Section 3: Account Structure */}
      <section className="py-20 px-6 border-t border-card-border">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            number="03"
            title="What's inside an Account?"
            subtitle="Four fields. That's it."
          />

          <div className="mt-12 space-y-8">
            <p className="text-lg text-zinc-400 max-w-2xl">
              Every single account on Solana has the same four fields:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <FieldCard
                name="lamports"
                description="The account's balance in the smallest unit of SOL. 1 SOL = 1,000,000,000 lamports. Every account needs some lamports to exist (this is called rent)."
              />
              <FieldCard
                name="data"
                description="A byte array that can store anything: program code, user data, NFT metadata, game state. The size is fixed when the account is created."
              />
              <FieldCard
                name="owner"
                description="The program that controls this account. Only the owner can modify the data. This is how Solana enforces permissions."
              />
              <FieldCard
                name="executable"
                description="A boolean flag. If true, this account contains a program that can be executed. If false, it's just data storage."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Account Types */}
      <section className="py-20 px-6 border-t border-card-border bg-card/50">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            number="04"
            title="Three Types of Accounts"
            subtitle="Same structure, different purposes"
          />

          <div className="mt-12">
            <p className="text-lg text-zinc-400 max-w-2xl mb-12">
              While all accounts have the same four fields, they serve different purposes.
              Here's how the same structure creates three distinct types:
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col gap-4">
                <div>
                  <h3 className="text-zinc-300 font-medium">Wallet Accounts</h3>
                  <p className="text-sm text-zinc-500 mt-2">
                    Hold SOL. Owned by the System Program.
                  </p>
                </div>
                <div className="mt-auto">
                  <WalletAccountVisual delay={0} />
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div>
                  <h3 className="text-zinc-300 font-medium">Program Accounts</h3>
                  <p className="text-sm text-zinc-500 mt-2">
                    Contain executable code. These are your smart contracts.
                  </p>
                </div>
                <div className="mt-auto">
                  <ProgramAccountVisual delay={0.1} />
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div>
                  <h3 className="text-zinc-300 font-medium">Data Accounts</h3>
                  <p className="text-sm text-zinc-500 mt-2">
                    Store application state. Owned by programs.
                  </p>
                </div>
                <div className="mt-auto">
                  <DataAccountVisual delay={0.2} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="py-20 px-6 border-t border-card-border">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-medium text-foreground">Key Takeaways</h2>
            <div className="grid md:grid-cols-3 gap-4 text-left mt-8">
              <div className="p-5 rounded-lg bg-card border border-card-border">
                <p className="text-xs text-zinc-600 mb-2">01</p>
                <p className="text-sm text-zinc-500">
                  <span className="text-zinc-300">Everything is an account.</span> Wallets, programs, data—all stored the same way.
                </p>
              </div>
              <div className="p-5 rounded-lg bg-card border border-card-border">
                <p className="text-xs text-zinc-600 mb-2">02</p>
                <p className="text-sm text-zinc-500">
                  <span className="text-zinc-300">Owners control access.</span> Only the owning program can modify an account's data.
                </p>
              </div>
              <div className="p-5 rounded-lg bg-card border border-card-border">
                <p className="text-xs text-zinc-600 mb-2">03</p>
                <p className="text-sm text-zinc-500">
                  <span className="text-zinc-300">Programs are accounts too.</span> Code lives in accounts marked as executable.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-card-border">
        <div className="max-w-3xl mx-auto text-center text-sm text-zinc-600">
          <p>Solana Visually</p>
        </div>
      </footer>
    </div>
  );
}

function SectionHeader({
  number,
  title,
  subtitle,
}: {
  number: string;
  title: string;
  subtitle: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <span className="text-zinc-600 text-sm font-mono">{number}</span>
      <h2 className="text-2xl font-medium mt-2 text-foreground">{title}</h2>
      <p className="text-zinc-500 mt-1">{subtitle}</p>
    </motion.div>
  );
}

function FieldCard({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="p-5 rounded-lg bg-card border border-card-border"
    >
      <span className="font-mono text-sm text-zinc-300">{name}</span>
      <p className="text-sm text-zinc-500 mt-2 leading-relaxed">{description}</p>
    </motion.div>
  );
}
