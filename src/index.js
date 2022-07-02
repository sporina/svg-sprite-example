import React from "react";
import ReactDOM from "react-dom";


function App() {
  return (
    <div className="App">
    <svg >
    <use href={`/sprite.svg#example-1`} />
    </svg>
    <svg >
      <use href={`/sprite.svg#example-2`} />
    </svg>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);