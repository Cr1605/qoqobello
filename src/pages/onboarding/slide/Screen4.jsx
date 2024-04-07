import React from "react";
import logoScreen4 from "../../../asset/Logo_accept.png";

const Slide4 = () => {
  return (
    <div className="fade-in">
      <div className="img-logo">
        <img src={logoScreen4} alt="logo"></img>
      </div>
      <div className="title">
        <div className="main-text">
          <div className="text-accept">
            <p>Conditions Générales d’Utilisation</p>
          </div>
          <div className="text-accept">
            <p>Conditions Générales de Ventes</p>
          </div>
          <div className="text-accept">
            <p>Politique de Confidentialité</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide4;
