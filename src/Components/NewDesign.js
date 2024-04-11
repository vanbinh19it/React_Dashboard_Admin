import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import MainDashboard from "./MainDashboard/MainDashboard";
import "./HomeAdmin.scss";

const NewDesign = () => {
  return (
    <>
      <div className="new_design_home ">
        <Sidebar />

        <MainDashboard />
      </div>
    </>
  );
};

export default NewDesign;
