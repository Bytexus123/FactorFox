import React, { useState } from "react";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";

interface TabColumnProps {
  tabTitles: string[];
  children?: any[] | JSX.Element | JSX.Element[];
}

const TabColumn = ({ tabTitles, children }: TabColumnProps) => {
  children = React.Children.toArray(children);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <Nav pills>
        {tabTitles.map((tabTitle, index) => (
          <NavItem key={index}>
            <NavLink
              className={activeTab == index ? "active" : ""}
              onClick={() => setActiveTab(index)}
            >
              {tabTitle}
            </NavLink>
          </NavItem>
        ))}
      </Nav>
      <TabContent activeTab={activeTab}>
        {children.map((child: any, index: any) => {
          return (
            <TabPane key={index} tabId={index}>
              {child}
            </TabPane>
          );
        })}
      </TabContent>
    </div>
  );
};

export default TabColumn;
