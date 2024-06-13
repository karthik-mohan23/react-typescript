import { useState } from "react";

function BackgroundChanger() {
  const [color, setColor] = useState("yellow");

  return (
    <div style={{ backgroundColor: color }} className="min-h-screen relative">
      <div className="absolute  flex gap-4 bottom-7 left-1/2 -translate-x-1/2 ">
        <button
          className="border border-black px-2 py-1 bg-red-400"
          onClick={() => setColor("red")}>
          Red
        </button>
        <button
          className="border border-black px-2 py-1 bg-green-400"
          onClick={() => setColor("green")}>
          Green
        </button>
        <button
          className="border border-black px-2 py-1 bg-blue-400"
          onClick={() => setColor("blue")}>
          Blue
        </button>
      </div>
    </div>
  );
}
export default BackgroundChanger;
