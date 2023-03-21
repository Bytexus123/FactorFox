import React from "react";
// import { useMediaQuery } from "react-responsive";
import { Nav, NavItem, NavLink } from "reactstrap";

const NaviagtionModel = () => {
  // const media768 = useMediaQuery({ query: "(min-width: 768px)" });
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
