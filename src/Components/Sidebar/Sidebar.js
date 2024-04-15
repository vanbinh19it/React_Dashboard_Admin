import React from "react";
import {
  cibReact,
  cilHome,
  cilBarChart,
  cilCog,
  cilCreditCard,
  cilUser,
  cilFile,
  cilSettings,
} from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { Link, useRoutes } from "react-router-dom";

const Sidebar = () => {
  const routeDashboard = [
    { path: "/dashboard", icon: cilHome, title: "Dashboard" },
  ];

  const routeConfigTop = [
    { path: "/tables", icon: cilBarChart, title: "Tables", isIconTitle: true },
    {
      path: "/billing",
      icon: cilCreditCard,
      title: "Billing",
      isIconTitle: true,
    },
    { path: "/rtl", icon: cilCog, title: "RTL", isIconTitle: true },
  ];

  const routeConfigBottom = [
    { path: "/profile", icon: cilUser, title: "Profile" },
    { path: "/SignIn", icon: cilFile, title: "SignIn" },
    { path: "SignUp", icon: cilSettings, title: "SignUp" },
  ];

  const routeElementDashboard = routeDashboard.map((route, index) => (
    <Link key={index} to={route.path} className="hello_dashboard">
      <div className="menu_dashboard">
        <div className="sidebar_menu_dashboard">
          <div className="background_menu_icon_dashboard">
            <div className="menu_icon sidebar_menu_icon_dashboard">
              <CIcon icon={route.icon} />
            </div>
          </div>
          <div className="sidebar_menu_title_dashboard">
            <h4>{route.title}</h4>
          </div>
        </div>
      </div>
    </Link>
  ));

  const routeElementsTop = routeConfigTop.map((route, index) => (
    <>
      <Link key={index} to={route.path} className="sidebar_menu_item">
        <div className="background_menu_icon">
          <div className="menu_icon">
            <CIcon icon={route.icon} />
          </div>
        </div>
        <div className="sidebar_menu_title">
          <h4>{route.title}</h4>
        </div>
      </Link>
    </>
  ));

  const routeElementsBottom = routeConfigBottom.map((route, index) => (
    <>
      <Link key={index} to={route.path} className="sidebar_menu_item">
        <div className="background_menu_icon">
          <div className="menu_icon">
            <CIcon icon={route.icon} />
          </div>
        </div>
        <div className="sidebar_menu_title">
          <h4>{route.title}</h4>
        </div>
      </Link>
    </>
  ));

  const menuItemsTop = useRoutes(routeConfigTop);
  const menuItemsBottom = useRoutes(routeConfigBottom);
  const menuDashboard = useRoutes(routeDashboard);

  return (
    <>
      <div className="sidebar_left">
        <div className="sidebar_logo">
          <div className="icon_logo">
            <CIcon icon={cibReact} />
          </div>
          <h6>GooUp1</h6>
        </div>
        <div className="sidebar_vector"></div>
        <div className="sidebar_menu">
          {/* <div className="menu_dashboard">
            <div className="sidebar_menu_dashboard">
              <div className="background_menu_icon_dashboard">
                <div className="menu_icon sidebar_menu_icon_dashboard ">
                  <CIcon icon={cilHome} />
                </div>
              </div>
              <div className="sidebar_menu_title sidebar_menu_title_dashboard">
                <h4>Dashboard</h4>
              </div>
            </div>
          </div> */}

          {menuDashboard}
          {routeElementDashboard}

          {menuItemsTop}
          {routeElementsTop}

          <div className=" sidebar_menu_accountPage">ACCOUNT PAGES</div>

          {menuItemsBottom}
          {routeElementsBottom}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
