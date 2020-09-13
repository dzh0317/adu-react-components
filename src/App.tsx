import React, { useState } from "react";
import Button from "./components/Button/Button";
import Menu from "./components/Menu/Menu";
import MenuItem from "./components/Menu/MenuItem";
import SubMenu from "./components/Menu/SubMenu";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Icon from "./components/Icon/Icon";
import Transition from "./components/Transition/Transition";
library.add(fas);

function App() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <Icon icon="arrow-down" theme="success" size="10x" />
        {/* <Menu defaultIndex={'0'} onSelect={(index) => alert(index)} mode="vertical" defaultOpenSubMenus={["3"]}>
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
        </Menu> */}
        <Menu defaultIndex={"0"} onSelect={(index) => alert(index)}>
          <MenuItem>菜单1</MenuItem>
          <MenuItem disabled>菜单2</MenuItem>
          <MenuItem>菜单3</MenuItem>
          <SubMenu title="dropdown">
            <MenuItem>dropdown1</MenuItem>
            <MenuItem>dropdown2</MenuItem>
            <MenuItem>dropdown3</MenuItem>
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
        <div>
          <Button btnType="primary" onClick={() => setOpen(!isOpen)}>
            Toggle
          </Button>
        </div>

        <Transition in={isOpen} timeout={300} animation="zoom-in-top">
          <div>
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
          </div>
        </Transition>
        <Transition in={isOpen} timeout={300} animation="zoom-in-top" wrapper>
          <Button btnType="primary" onClick={() => setOpen(!isOpen)}  >
            Toggle
          </Button>
        </Transition>
      </header>
    </div>
  );
}

export default App;
