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


import { Button } from "@/components/ui/button";

function App() {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-background">
      <Button>Request SOL</Button>
    </div>
  );
}

export default App;
