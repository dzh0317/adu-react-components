import React from "react";
import { render, RenderResult, fireEvent, cleanup, waitFor } from "@testing-library/react";
import Menu, { MenuProps } from "./Menu";
import MenuItem from "./MenuItem";
import SubMenu from "./SubMenu";

const testProps: MenuProps = {
  defaultIndex: '0',
  onSelect: jest.fn(),
  className: "test",
};
const testVerProps: MenuProps = {
  defaultIndex: '0',
  mode: "vertical",
};
const generateMenu = (props: MenuProps) => {
  return (
    <Menu {...props}>
      <MenuItem>active</MenuItem>
      <MenuItem disabled>
        disabled
      </MenuItem>
      <MenuItem>xyz2</MenuItem>
      <SubMenu title="dropdown">
        <MenuItem>subMenu1</MenuItem>
        <MenuItem>suMenu2</MenuItem>
      </SubMenu>
    </Menu>
  );
};
const createStyleFile = () => {
  const cssfile: string = `
    .submenu {
      display:none;
    }
    .submenu.menu-opened {
      display:block;
    }
  `
  const style = document.createElement('style')
  style.type = 'text/css';
  style.innerHTML = cssfile;
  return style;
}

let wrapper: RenderResult,
  menuElement: HTMLElement,
  activeElement: HTMLElement,
  disabledElement: HTMLElement;
describe("test Menu Component", () => {
  beforeEach(() => {
    wrapper = render(generateMenu(testProps));
    wrapper.container.append(createStyleFile())
    menuElement = wrapper.getByTestId("test-menu");
    activeElement = wrapper.getByText("active");
    disabledElement = wrapper.getByText("disabled");
  });
  it("should render the currect Menu adn MenuItem base default props", () => {
    expect(menuElement).toBeInTheDocument()
    expect(menuElement).toHaveClass('menu test')
    expect(menuElement.getElementsByTagName('li').length).toEqual(6)
    expect(menuElement.querySelectorAll(':scope > li').length).toEqual(4)
    expect(activeElement).toHaveClass('menu-item is-active')
    expect(disabledElement).toHaveClass('menu-item is-disabled')


  });
  it("click items should change active and call the right callback", () => {
    const thirdItem = wrapper.getByText('xyz2')
    fireEvent.click(thirdItem)
    expect(thirdItem).toHaveClass('is-active')
    expect(activeElement).not.toHaveClass('is-active')
    expect(testProps.onSelect).toHaveBeenCalledWith('2')
    fireEvent.click(disabledElement)
    expect(disabledElement).not.toHaveClass('is-active')
    expect(testProps.onSelect).not.toHaveBeenCalledWith('1')

  });
  it("should render vertical mode when mode is set to vertical", () => {
    cleanup()
    wrapper = render(generateMenu(testVerProps))
    menuElement = wrapper.getByTestId('test-menu')
    expect(menuElement).toHaveClass('menu-vertical')
  });
  it('should show dropdown items when hover on subMenu', async () => {
    expect(wrapper.queryByText('subMenu1')).not.toBeVisible()
    const dropdownElement = wrapper.getByText('dropdown');
    fireEvent.mouseEnter(dropdownElement)
    await waitFor(() => {
      expect(wrapper.queryByText('subMenu1')).toBeVisible()
    })
    fireEvent.click(wrapper.getByText('subMenu1'))
    expect(testProps.onSelect).toHaveBeenCalledWith('3-0')
    fireEvent.mouseLeave(dropdownElement)
    await waitFor(() => {
      expect(wrapper.queryByText('subMenu1')).not.toBeVisible()
    })
  })
});
