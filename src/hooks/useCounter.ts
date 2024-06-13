import { useState } from "react";

export const useCounter = (initialValue: number) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(count + 1);
  const reset = () => setCount(0);
  const decrement = () => setCount(count - 1);

  return {
    count,
    increment,
    decrement,
    reset,
  };
};
