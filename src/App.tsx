import React from "react";
import Button, {ButtonType,ButtonSize } from "./components/Button/Button";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button className="custom" target="_blank" onClick={(e) => {e.preventDefault(); alert('123')}}>Button Default</Button>
        <Button btnType={ButtonType.Primary} >Button Primary</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Large}>Button Danger</Button>
        <Button btnType={ButtonType.Link} href="www.baidu.com">Button Baidu Link</Button>
        <Button btnType={ButtonType.Link} href="www.baidu.com" disabled>Button Baidu Link disabled</Button>
        <Button size={ButtonSize.Small} autoFocus >Button Danger autoFocus</Button>
        <Button size={ButtonSize.Large}>Button Large</Button>
        <Button size={ButtonSize.Large} disabled>Button Danger</Button>
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
      </header>
    </div>
  );
}

export default App;
