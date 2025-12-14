import { useEffect, useState } from "react";
import { connection } from "../lib/connection";

export default function TestConnection() {
  const [slot, setSlot] = useState<number | string | null>(null);

  useEffect(() => {
    async function test() {
      try {
        const currentSlot = await connection.getSlot();
        setSlot(currentSlot);
      } catch (err) {
        console.error("Connection failed:", err);
        setSlot("ERROR");
      }
    }
    test();
  }, []);

  return (
    <div>
      <h2>Connection Test</h2>
      <p>Slot: {slot !== null ? slot : "Loading..."}</p>
    </div>
  );
}
