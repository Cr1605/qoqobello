import React from "react";
import logoScreen2 from "../../../asset/logo_onboarding.png";

const Slide2 = () => {
  return (
    <div className="fade-in">
      <div className="img-logo">
        <img src={logoScreen2} alt="logo"></img>
      </div>
      <div className="title">
        <div className="main-text">
          <p className="title-compte">Fais des économies avec nos super offres</p>
          <div className="text">
            <p>Retrouve tes produits préférés et des exclusivités que ne trouveras nulle part ailleurs.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide2;