import Child from "./Child";

type ParentProps = {
  age: number;
  salary: number;
  count: number;
};

function Parent({ age, count, salary }: ParentProps) {
  console.log("Inside Parent");
  return (
    <div>
      <h1>{count}</h1>
      <Child age={age} salary={salary} />
    </div>
  );
}
export default Parent;
