import React from "react";

type ChildProps = {
  age: number;
  salary: number;
};

function Child({ age, salary }: ChildProps) {
  console.log("Inside child");
  return (
    <div>
      <p>Age: {age}</p>
      <p>salary: {salary}</p>
    </div>
  );
}
export default React.memo(Child);
