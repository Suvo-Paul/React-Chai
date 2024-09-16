import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(15);

  // let counter = 15

  const increaseValue = () => {
    // if (counter < 10) {
    //   setCounter(counter + 1)
    // }
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);

  };

  const decreaseValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Hello React</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={increaseValue}>Increase value {counter}</button>
      <br />
      <br />
      <button onClick={decreaseValue}>Decrease value {counter}</button>
      <p>Footer : {counter}</p>
    </>
  );
}

export default App;
