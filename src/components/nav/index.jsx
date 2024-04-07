import React from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { listIconBottomSheet } from "../../constant";

const Navication = () => {
  const navigate = useNavigate();

  const handleNav = (value) => {
    setTimeout(() => {
      navigate(value);
    }, 300);
  };

  return (
    <div className="navication">
      {listIconBottomSheet.map((item, idx) => (
        <div className="item-nav">
          <img src={item.icon} alt="icon-nav" onClick={() => handleNav(item.link)} />
        </div>
      ))}
    </div>
  );
};

export default Navication;
