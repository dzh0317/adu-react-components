import React from "react";
import HelloWord from "./components/HelloWorld";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>HelloWorld</h1>
        <h2>HelloWorld</h2>
        <h3>HelloWorld</h3>
        <h4>HelloWorld</h4>
        <hr/>
        <code>const a = 'b'</code>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <HelloWord />
      </header>
    </div>
  );
}

export default App;
