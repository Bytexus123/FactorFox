import React from "react";
import {
  Nav,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
} from "reactstrap";
import { Direction } from "../../../../packages/factorfox-object/direction";

interface MenuBarProps {
  direction?: Direction;
}
const MenuBar = ({ direction }: MenuBarProps) => {
  return (
    <div className="main-menu ms-auto position-relative">
      <Nav>
        <UncontrolledDropdown down={direction}>
          <DropdownToggle caret color="transparent" className="text-start">
            <span className="pe-none">
              <span className="">
                <span className="d-md-inline">Company</span>
              </span>
            </span>
          </DropdownToggle>
          <DropdownMenu end className="py-0">
            <DropdownItem
              className="py-2 d-flex border-bottom"
              onClick={() => {}}
            >
              Company 1
            </DropdownItem>
            <DropdownItem
              className="py-2 d-flex border-bottom"
              onClick={() => {}}
            >
              Company 2
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
    </div>
  );
};

export default MenuBar;
