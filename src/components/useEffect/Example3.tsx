import { useEffect, useState } from "react";

function Example3() {
  const [count, setCount] = useState(0);

  console.log("first");

  useEffect(() => {
    console.log("useEffect 1");
    setCount((count) => count + 1);
  }, []);
  useEffect(() => {
    console.log("useEffect 2");
    setCount((count) => count + 2);
  }, []);

  console.log("render");
  return <div>{count}</div>;
}
export default Example3;

// first
// render
// useEffect 1
// useEffect 2
// first
// render
