import React from "react";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";
const Sidebar = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    window.history.forward();
    navigate("/");
  };

  return (
    <div className="sidebar">
      
      <div className="logo-7">LOGO</div>
      <div className="sidebar-content">
        <div className="Publish-content">
          <div className="Publish-content-1">Publish Content</div>
        </div>
        <div className="Publish-content">
          <div className="Publish-content-1">Comments</div>
        </div>
        <div className="Publish-content">
          <div className="Publish-content-1">History</div>
        </div>

        <div className="Logout">
          <button className="Logout-2" onClick={logout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
