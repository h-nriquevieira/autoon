import React from 'react';
import iconCalendar from '../../assets/calendar.svg'
import iconKM from '../../assets/driving.svg'
import './Card.css'

function Card(props) {
  return (
      <div className="card">
          <p className="model">{props.info.model}</p>
          <p className="make">{props.info.make}</p>
          <img className="car-img" src={props.info.img} alt="" />
          <div className="year">
              <img src={iconCalendar} alt="" className='year--icon'/>
              <p className="year--text">{props.info.year}</p>
          </div>
          <div className="km">
              <img src={iconKM} alt="" className='km--icon'/>
              <p className="km--text">{props.info.km}KM</p>
          </div>
          <p className="price">R${props.info.price}</p>
          <button className="card--button">Saiba mais</button>
      </div>
  );
}

export default Card;