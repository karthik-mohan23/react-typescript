import { useEffect, useState } from "react";

function Example4() {
  const [count, setCount] = useState(0);

  console.log("first");
  // first              // first
  //render              //render
  // inside useEffect   //cleanup function
  // n                  // inside useEffect

  useEffect(() => {
    console.log("inside useEffect");
    let id = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    return () => {
      console.log("cleanup function");
      return clearInterval(id);
    };
  }, [count]); // without count it will stop at 1

  console.log("render");

  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}
export default Example4;
