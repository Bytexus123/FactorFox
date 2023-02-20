import React, { useState } from "react";
import {
  Button,
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Direction } from "../../packages/factorfox-object/direction";
import CompanyLogo from "../company-logo";

interface SideBarProps {
  icon: any;
  openside?: Direction;
}

const SideBar = ({ icon, openside }: SideBarProps) => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <Button
        color="link"
        className="fs-2"
        onClick={() => {
          setShow(true);
        }}
      >
        <i className={`fa-regular fa-${icon}`}></i>
      </Button>
      <Offcanvas
        direction={openside}
        isOpen={show}
        toggle={() => {
          setShow(false);
        }}
        style={{ maxWidth: "300px" }}
      >
        <OffcanvasHeader
          toggle={() => {
            setShow(false);
          }}
        >
          {!openside&& <CompanyLogo/>}
        </OffcanvasHeader>
        <OffcanvasBody>
          <Nav vertical>
            <NavItem>
              <NavLink href="#">Link</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Link</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Another Link</NavLink>
            </NavItem>
          </Nav>
        </OffcanvasBody>
      </Offcanvas>
    </div>
  );
};

export default SideBar;
