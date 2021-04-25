import { useState } from "react";

function FunctionalComponent() {
  //React hook, it adds a feature to a normally very bland functional component
  const [count, setCount] = useState(0);

  return (
    <div className="FunctionalComponent">
      <h1>Count: {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
    </div>
  );
}

export default FunctionalComponent;
