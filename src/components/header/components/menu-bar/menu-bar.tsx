import React from "react";
import {
  Nav,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
} from "reactstrap";

const mainMenuItems = [
  { name: "Let's Chat", icon: "comment" },
  { name: "Calender", icon: "calendar" },
  { name: "Bank Files", icon: "clipboard" },
  { name: "QuickBooks", icon: "file" },
  { name: "Generate Ticket", icon: "ticket" },
  { name: "Ticket Status", icon: "calendar-check" },
  { name: "Releases", icon: "rotate-left" },
  { name: "Settings", icon: "gear" },
  { name: "Logout", icon: "arrow-right-from-bracket" },
];
const MenuBar = () => {
  return (
    <div className="main-menu ms-auto position-relative">
      <Nav>
        <UncontrolledDropdown nav direction="down">
          <DropdownToggle caret color="transparent" className="text-start ">
            <span className="pe-none">
              <i className="fa-regular fa-grid-2 pe-2 fs-5"></i>
              <span className="">
                <span className="d-none d-md-inline">Menu</span>
              </span>
            </span>
          </DropdownToggle>
          <DropdownMenu end className="py-0">
            {mainMenuItems.map(({ icon, name }, index) => (
              <DropdownItem key={index} className="py-2 d-flex border-bottom">
                <i className={`pe-2 fa-regular fa-${icon}`}></i>
                <span>{name}</span>
              </DropdownItem>
            ))}
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
    </div>
  );
};

export default MenuBar;
