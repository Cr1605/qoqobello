import React from "react";
import logo from "../../../asset/logo.png";
import logoTitle from "../../../asset/logo-title.png";

const Slide1 = () => {
  return (
    <div className="fade-in">
      <div className="img-logo">
        <img src={logo} alt="logo"></img>
      </div>
      <div className="title">
        <div className="main-text">
          <p className="title-compte">Bienvenue sur</p>
          <img src={logoTitle} alt="logo-title"></img>
          <div className="text">
            <p>L’app d’enchère la plus folle !</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide1;
