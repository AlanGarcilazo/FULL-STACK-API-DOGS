import React from 'react';
import {Link } from 'react-router-dom';
import imgs from '../../img/noimg.jpg';
import s from "./cards.module.css";

const Cards = ({ name, img, temperament, temperaments, id }) => {
  return (
    <div className={s.container}>     
     <Link to={`/dogs/${id}`}>
        <img src={img ? img : imgs} alt="breed" />
        <h1 className={s.name}>{name}</h1>      
        <div className={s.temps}>     
        {temperament 
          ? temperament.map((el) => "  " + el + "")
          : temperaments?.map((el) => el.name + " ")}   
          </div>      
      </Link> 
    </div>
  );
};

export default Cards;