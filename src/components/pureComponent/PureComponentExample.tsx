import { useEffect, useState } from "react";
import Parent from "./Parent";

function PureComponentExample() {
  const [count, setCount] = useState(0);
  const [salary, setSalary] = useState(1000);
  const [age, setAge] = useState(25);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [count]);

  return (
    <div>
      <Parent count={count} salary={salary} age={age} />
    </div>
  );
}
export default PureComponentExample;
