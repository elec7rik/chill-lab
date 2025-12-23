import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

function App() {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-background">
      <WalletMultiButton />
    </div>
  );
}

export default App;

// import { FaucetCard } from "@/components/FaucetCard";

// function App() {
//   return (
//     <div className="h-screen w-screen flex items-center justify-center bg-background">
//       <FaucetCard />
//     </div>
//   );
// }

// export default App;
