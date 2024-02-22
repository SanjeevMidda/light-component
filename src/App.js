import "./index.css";
import Light from "./components/Light";
import { useEffect, useState } from "react";

function App() {
  let randomColor = () => {
    return Math.floor(Math.random() * 255);
  };

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setInterval(() => setCounter(counter + 1), 2000);
  });

  let lights = [];

  let randomDelay = () => {
    return Math.random() * 10;
  };

  console.log(randomDelay());

  for (let index = 0; index < 403; index++) {
    lights.push(
      <Light
        color={`rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`}
        delay={randomDelay()}
      />
    );
  }

  return (
    <div className="App">
      <div className="lightContainer">
        <h4>LIGHTS</h4>
        {lights.map((item) => {
          return item;
        })}
      </div>
    </div>
  );
}

export default App;
