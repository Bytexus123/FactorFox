import React from "react";
import {
  Col,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
  UncontrolledButtonDropdown,
} from "reactstrap";
import MenuBar from "./components/menu-bar";
import Search from "./components/search";
import { handleLogout } from "../../packages/auth";
import CompanyLogo from "../../common-components/company-logo";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
  return (
    <div className="header-section">
      <div className="logo-section d-flex">
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
                  <div className="d-block text-start">
                    <div>
                      {t("header.hello")},{" "}
                      {localStorage
                        .getItem("user")
                        ?.replace(/@.*$/, "")
                        .toUpperCase() || "user"}
                    </div>
                    <div>{t("header.factorfox")}</div>
                  </div>
                </Col>
              </Row>
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem className="border-bottom">
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
    </div>
  );
};

export default Header;
