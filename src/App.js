import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import FunctionalComponent from "./FunctionalComponent";
import ClassComponent from "./ClassComponent";

function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      functional
      <FunctionalComponent />
      <FunctionalComponent />
      Class
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        Hide?
      </button>
      {show && <ClassComponent message="banana" />}
    </div>
  );
}

export default App;
