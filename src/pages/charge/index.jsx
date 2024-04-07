import React from "react";
import Header from "../../components/header";
import Navication from "../../components/nav";
import "./index.css";
//image
import charge from '../../asset/charge.png';

const Charge = () => {
  return (
    <div className="charge">
      <Header />
      <div className="title-header">
        <p>Recharge</p>
        <img src={charge} alt="icon-title" />
      </div>
      <Navication />
    </div>
  );
};

export default Charge;
