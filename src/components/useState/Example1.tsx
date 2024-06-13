import { useState } from "react";

function Example1() {
  const [text, setText] = useState("Hello");

  const handleText = () => {
    setText(text + "World");
    setText(text + "React");
  };

  return (
    <div>
      <button onClick={handleText}>Click me</button>
    </div>
  );
}
export default Example1;
