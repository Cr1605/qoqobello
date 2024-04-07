import React from "react";
import logoScreen3 from "../../../asset/logo_screen3.png"

const Slide3 = () => {
  return (
    <div className="fade-in">
      <div className="img-logo">
        <img src={logoScreen3} alt="logo"></img>
      </div>
      <div className="title">
        <div className="main-text">
          <p className="title-compte">Participe à des enchères de folie</p>
          <div className="text">
            <p>Tiens-toi prêt à miser n’importe où, n’importe quand avec des enchères à durée ultra-limitée.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide3;