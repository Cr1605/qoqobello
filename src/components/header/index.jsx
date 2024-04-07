import React from "react";
import "./index.css";
//image
import logo from "../../asset/Logo-mobile.png";
import coconut from "../../asset/coconut.png";
import user from "../../asset/user-circle.png";

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="left-header">
          <img src={logo} alt="logo-mobile" />
        </div>
        <div className="right-header">
          <span>43</span>
          <span>
            <img src={coconut} alt="coconut" />
            <div></div>
            <img src={user} alt="user" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
