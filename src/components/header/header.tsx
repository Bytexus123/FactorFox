import React from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Col,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
  UncontrolledButtonDropdown,
} from "reactstrap";
import SideBar from "../../common-components/sidebar/sidebar";
import MenuBar from "./components/menu-bar";
import Search from "./components/search";


const Header = () => {
  let history = useHistory();
  return (
    <div className="header-section">
      <SideBar icon={'bars'} />
      <div className="header__left">
        {/* <a className='logo' target='_blank' href='/'>
              <img src='images/factorfox.png' alt='FactorFox' />
            </a> */}
        <Link className="logo" title="FactorFox" to="/">
          <img src="images/factorfox.png" alt="FactorFox" height={40} />
        </Link>
      </div>
      <MenuBar />
      <Search />
      <div className="header__right">
        <div className="d-flex align-items-center">
          <UncontrolledButtonDropdown direction="down" className="float-right">
            <DropdownToggle
              id="userProfileDropdown"
              color="transparent"
              className="user-dropdown__icon"
            >
              <Row>
                <Col className="user-dropdown-greeting">
                  <i className="fa-light fa-user"></i>
                  <div className="d-block">
                    <div>user</div>
                    <div>Org</div>
                  </div>
                </Col>
              </Row>
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem
                className="border-bottom"
              // onClick={() => history.push('/user-profile')}
              >
                <div className="d-flex justify-content-between text-align-center">
                  <span className="text-dark">Profile</span>
                </div>
              </DropdownItem>
              <DropdownItem className="border-bottom" onClick={() => history.push("/")}>
                <div className="d-flex justify-content-between text-align-center">
                  <span className="text-dark">Logout</span>
                  <i
                    style={{ fontSize: "1rem" }}
                    className="fas fa-arrow-right-from-bracket"
                  ></i>
                </div>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledButtonDropdown>
        </div>
      </div>
      <SideBar icon={'bell'} openside={"end"} />
    </div>
  );
};

export default Header;
