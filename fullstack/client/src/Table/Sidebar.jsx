import React from "react";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";
import vector_1 from "../asserts/Vectorpng.png";
import vector_2 from "../asserts/Vectorvector-1.png";
import vector_3 from "../asserts/Vector-1.png";
import vector_4 from "../asserts/Vector.png";
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
