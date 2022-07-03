import React from "react";
import ReactDOM from "react-dom";
import './App.css';

function App() {
  return (
    <div >
      <head>
        <link rel="preload" as="image/svg+xml" href="spriteExample.svg"/>
      </head>
    <svg>
      <use className="yellow" href={`/sprite.svg#example-1`} />
    </svg>
    <svg >
      <use href={`/sprite.svg#example-2`} />
    </svg>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);