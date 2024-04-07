import React from 'react'
import Header from '../../components/header';
import Navication from '../../components/nav';
import './index.css'
//image
import bids from '../../asset/bid.png';
import today from '../../asset/calendar-days.png';

const Bids = () => {
  return (
    <div className='bids'>
      <Header />
      <div className="title-header">
          <p>Enchères à venir</p>
          <img src={bids} alt="icon-title"/>
      </div>
      <div className='today'>
        <img src={today} alt='today'/>
        <p>Aujourd’hui</p>
      </div>
      <Navication />
    </div>
  )
}

export default Bids;