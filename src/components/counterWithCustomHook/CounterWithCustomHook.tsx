import { useCounter } from "../../hooks/useCounter";

//Implement a hook called useCounter.
//This hook is responsible for returning
//below 4 values.
//count: current count value
//increment: function to increment count value
//decrement: function to decrement count value
//reset: function to reset count value

function CounterWithCustomHook() {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <section className="min-h-screen flex flex-col gap-5 justify-center items-center">
      <h1 className="text-6xl ">Count : {count}</h1>
      <div className="flex items-center gap-4">
        <button onClick={increment} className="border border-black px-2 py-1">
          Increment
        </button>
        <button onClick={reset} className="border border-black px-2 py-1">
          Reset
        </button>
        <button onClick={decrement} className="border border-black px-2 py-1">
          Decrement
        </button>
      </div>
    </section>
  );
}
export default CounterWithCustomHook;
