import React from "react";
import Header from "../../components/header";
import Navication from "../../components/nav";
import "./index.css";
import { listItemToday } from "../../constant";
//image
import bids from "../../asset/bid.png";
import today from "../../asset/calendar-days.png";
import price from "../../asset/price.png";

const Bids = () => {
  return (
    <div className="bids">
      <Header />
      <div className="title-header">
        <p>Enchères à venir</p>
        <img src={bids} alt="icon-title" />
      </div>
      <div className="today">
        <img src={today} alt="today" />
        <p>Aujourd’hui</p>
      </div>
      <div className="center">
        <div className="item-today">
          {listItemToday.map((item, idx) => (
            <div className="item">
              <img src={item.image} alt="item01" />
              <p>Bientôt disponible</p>
              <div className="price">
                <p className="prix">Prix magasin</p>
                <p className="price-item">{item.price}€</p>
                <p className="price-change">
                  = {item.price * 100} <img src={price} alt="icon-price" />
                </p>
              </div>
              <div className="unblock">
                <p className="unblock-text">Débloquer</p>
                <p className="unblock-number">
                  {item.block} <img src={price} alt="icon-price" />
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="today">
        <img src={today} alt="today" />
        <p>Demain</p>
      </div>
      <div className="center">
        <div className="item-today">
          {listItemToday.map((item, idx) => (
            <div className="item">
              <img src={item.image} alt="item01" />
              <p>Bientôt disponible</p>
              <div className="price">
                <p className="prix">Prix magasin</p>
                <p className="price-item">{item.price}€</p>
                <p className="price-change">
                  = {item.price * 100} <img src={price} alt="icon-price" />
                </p>
              </div>
              <div className="unblock">
                <p className="unblock-text">Débloquer</p>
                <p className="unblock-number">
                  {item.block} <img src={price} alt="icon-price" />
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Navication />
    </div>
  );
};

export default Bids;
