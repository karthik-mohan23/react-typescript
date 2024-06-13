import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <section className="min-h-screen flex flex-col gap-5 justify-center items-center">
      <h1 className="text-6xl ">Count : {count}</h1>
      <div className="flex items-center gap-4">
        <button
          onClick={() => setCount(count + 1)}
          className="border border-black px-2 py-1">
          Increment
        </button>
        <button
          onClick={() => setCount(0)}
          className="border border-black px-2 py-1">
          Reset
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="border border-black px-2 py-1">
          Decrement
        </button>
      </div>
    </section>
  );
}
export default Counter;
