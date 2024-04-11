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

const Sidebar = () => {
  return (
    <>
      {/* <div className="sidebar"> */}
      <div className="sidebar_left">
        <div className="sidebar_logo">
          <div className="icon_logo">
            <CIcon icon={cibReact} />
          </div>
          <h6>GooUp1</h6>
        </div>
        <div className="sidebar_vector"></div>
        <div className="sidebar_menu">
          <div className="menu_dashboard">
            <div className=" sidebar_menu_item sidebar_menu_dashboard">
              <div className="background_menu_icon_dashboard">
                <div className="menu_icon sidebar_menu_icon_dashboard menu_icon">
                  <CIcon icon={cilHome} />
                </div>
              </div>

              <div className="sidebar_menu_title sidebar_menu_title_dashboard">
                <h4>Dashboard</h4>
              </div>
            </div>
          </div>
          <div className="sidebar_menu_item sidebar_menu_tables">
            <div className="background_menu_icon">
              <div className="menu_icon sidebar_menu_icon_tables">
                <CIcon icon={cilBarChart} />
              </div>
            </div>
            <div className="sidebar_menu_title sidebar_menu_title_tables">
              <h4>Tables</h4>
            </div>
          </div>
          <div className="sidebar_menu_item sidebar_menu_billing">
            <div className="background_menu_icon">
              <div className="menu_icon sidebar_menu_icon_billing">
                <CIcon icon={cilCreditCard} />
              </div>
            </div>
            <div className="sidebar_menu_title sidebar_menu_title_billing">
              <h4>Billing</h4>
            </div>
          </div>
          <div className="sidebar_menu_item sidebar_menu_RTL">
            <div className="background_menu_icon">
              <div className="menu_icon sidebar_menu_icon_RTL">
                <CIcon icon={cilCog} />
              </div>
            </div>
            <div className="sidebar_menu_title sidebar_menu_title_RTL">
              <h4>RTL</h4>
            </div>
          </div>
          <div className="sidebar_menu_item sidebar_menu_accountPage">
            ACCOUNT PAGES
          </div>
          <div className="sidebar_menu_item sidebar_menu_profile">
            <div className="background_menu_icon">
              <div className="menu_icon sidebar_menu_icon_profile">
                <CIcon icon={cilUser} />
              </div>
            </div>
            <div className="sidebar_menu_title sidebar_menu_title_profile">
              <h4>Profile</h4>
            </div>
          </div>
          <div className="sidebar_menu_item sidebar_menu_signIn">
            <div className="background_menu_icon">
              <div className="menu_icon sidebar_menu_icon_SignIn">
                <CIcon icon={cilFile} />
              </div>
            </div>
            <div className="sidebar_menu_title sidebar_menu_title_SignIn">
              <h4>SignIn</h4>
            </div>
          </div>

          <div className="sidebar_menu_item sidebar_menu_signIn">
            <div className="background_menu_icon">
              <div className="menu_icon sidebar_menu_icon_SignUp">
                <CIcon icon={cilSettings} />
              </div>
            </div>
            <div className="sidebar_menu_title sidebar_menu_title_SignUp">
              <h4>SignUp</h4>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Sidebar;
