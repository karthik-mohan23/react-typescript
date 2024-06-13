import { useEffect, useState } from "react";

function Example1() {
  const [count, setCount] = useState(0);

  console.log("first");

  useEffect(() => {
    console.log("useEffect");
    setCount(count + 1);
  }, []);

  console.log("render");
  return <div>{count}</div>;
}
export default Example1;
