import React from "react";
import Button from "./components/Button/Button";
import Menu from "./components/Menu/Menu";
import MenuItem from "./components/Menu/MenuItem"; 
import SubMenu from "./components/Menu/SubMenu"; 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu defaultIndex={0} onSelect={(index) => alert(index)} mode="vertical">
          <MenuItem >菜单1</MenuItem>
          <MenuItem  disabled>菜单2</MenuItem>
          <MenuItem >菜单3</MenuItem>
          <SubMenu title="dropdown">
            <MenuItem>
              dropdown1
            </MenuItem>
            <MenuItem>
              dropdown2
            </MenuItem>
            <MenuItem>
              dropdown3
            </MenuItem>
          </SubMenu>
        </Menu>
        <Menu defaultIndex={0} onSelect={(index) => alert(index)}>
          <MenuItem >菜单1</MenuItem>
          <MenuItem  disabled>菜单2</MenuItem>
          <MenuItem >菜单3</MenuItem>
          <SubMenu title="dropdown">
            <MenuItem>
              dropdown1
            </MenuItem>
            <MenuItem>
              dropdown2
            </MenuItem>
            <MenuItem>
              dropdown3
            </MenuItem>
          </SubMenu>
        </Menu>
        <Button
          className="custom"
          target="_blank"
          onClick={(e) => {
            e.preventDefault();
            alert("123");
          }}
        >
          Button Default
        </Button>
        <Button btnType="primary">Button Primary</Button>
        <Button btnType="danger" size="lg">
          Button Danger
        </Button>
        <Button btnType="link" href="www.baidu.com">
          Button Baidu Link
        </Button>
        <Button btnType="link" href="www.baidu.com" disabled>
          Button Baidu Link disabled
        </Button>
        <Button size="sm" autoFocus>
          Button Danger autoFocus
        </Button>
        <Button size="lg">Button Large</Button>
        <Button size="lg" disabled>
          Button Danger
        </Button>
        <h2>HelloWorld</h2>
        <h3>HelloWorld</h3>
        <h4>HelloWorld</h4>
        <hr />
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
