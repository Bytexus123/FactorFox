import React from "react";
// import { Link, useHistory } from "react-router-dom";
import {
  Col,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
  UncontrolledButtonDropdown,
} from "reactstrap";
// import SideBar from "../../common-components/sidebar/sidebar";
import MenuBar from "./components/menu-bar";
import Search from "./components/search";
import { handleLogout } from "../../components/header/components/logout/logout";
import CompanyLogo from "../../common-components/company-logo";
import { useTranslation } from "react-i18next";

const Header = () => {
  // let history = useHistory();
  const { t } = useTranslation();
  return (
    <div className="header-section">
      <div className="logo-section d-flex">
        {/* <SideBar icon={"bars"} /> */}
        <CompanyLogo height={30} shrinkOnSmallScreen />
      </div>
      <MenuBar />
      <Search />
      <div className="menu-section">
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
                    <div>{localStorage.getItem("user") || "user"}</div>
                    <div>{t("header.factorfox")}</div>
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
              <DropdownItem className="border-bottom" onClick={handleLogout}>
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
      {/* <SideBar icon={"bell"} openside={"end"} /> */}
    </div>
  );
};

export default Header;
