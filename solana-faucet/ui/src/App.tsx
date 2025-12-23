// import TestConnection from "./components/TestConnection";

// function App() {
//   return (
//     <div>
//       <h1>Solana Faucet UI</h1>
//       <TestConnection />
//     </div>
//   );
// }

// export default App;


// import { Button } from "@/components/ui/button";

// function App() {
//   return (
//     <div className="h-screen w-screen flex items-center justify-center bg-background">
//       <Button>Request SOL</Button>
//     </div>
//   );
// }

// export default App;

import { FaucetCard } from "@/components/FaucetCard";

function App() {
  return (
    // <div className="min-h-screen w-full flex items-center justify-center bg-background">
    <div className="h-screen w-screen flex items-center justify-center bg-background">
      <FaucetCard />
    </div>
  );
}

export default App;
