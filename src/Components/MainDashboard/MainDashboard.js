import React from "react";
import "../HomeAdmin.scss";
import { cilSettings, cilUser, cilCoffee, cilSearch } from "@coreui/icons";
import CIcon from "@coreui/icons-react";

const MainDashboard = () => {
  return (
    <div className="main_dashboard">
      <div className="main_dashboard_item">
        <div className="main_dashboard_navbar">
          <div className="dashboard_navbar_text">
            <div className="dashboard_navbar_text_item1">
              <span className="text_item1 text_item1_page">Pages</span>
              <span className="text_item1 text_item1_icon">/</span>
              <span className="text_item1 text_item1_table">Tables</span>
            </div>
            <div className="dashboard_navbar_text_item2">Tables</div>
          </div>

          <div className="dashboard_navbar_menu">
            <div className="dashboard_navbar_item dashboard_navbar_menu_search">
              <div className="dashboard_navbar_menu_search_icon">
                <CIcon icon={cilSearch} />
              </div>
              <div className="dashboard_navbar_menu_search_input">
                <input placeholder="Type here..." />
              </div>
            </div>

            <div className=" dashboard_menu_icon dashboard_navbar_item dashboard_navbar_signIn">
              <div className="background_menu_icon">
                <div className="menu_icon sidebar_menu_icon_SignIn">
                  <CIcon icon={cilUser} />
                </div>
              </div>
              <div className="sidebar_menu_title sidebar_menu_title_SignIn">
                <h4>SignIn</h4>
              </div>
            </div>

            <div className="dashboard_navbar_item dashboard_navbar_icon_setting">
              <CIcon icon={cilSettings} />
            </div>

            <div className="dashboard_navbar_item dashboard_navbar_icon_">
              <CIcon icon={cilCoffee} />
            </div>
          </div>
        </div>

        <div className="main_dashboard_content">
          <div className="main_dashboard_content_title">User Tables</div>
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
