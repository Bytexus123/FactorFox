import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

const NaviagtionModel = () => {
  const navitems = ["Reports"];

  return (
    <div className="theme-nav">
      <Nav className="ps-5">
        {navitems.map((item, index) => (
          <NavItem key={index}>
            <NavLink active href="#">
              {item}
            </NavLink>
          </NavItem>
        ))}
      </Nav>
    </div>
  );
};

export default NaviagtionModel;
