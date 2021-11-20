/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import style from './paginator.module.css';


export default function Paginado({ dogsPerPage, allDogs, paginado }) {
  const pageNumber = [];
  /*
   * Vamos a pushear al arreglo pageNumber, el número redondeado para arriba, del resultado de dividir todos los personajes por el número de personajes deseados.
   */
  for (let i = 1; i <= Math.ceil(allDogs / dogsPerPage); i++) {
    pageNumber.push(i);
  }
  /*
   * Ahora si tengo 'pageNumber', mapeamos todos los números que contenga el arreglo.
   */
  return (
    <div>    
      <ul className={style.ul}>
        {pageNumber &&
          pageNumber.map(number => (
            <li key={number}
            className={style.paginado}>             
              <a href="#" className={style.a} onClick={() => paginado(number)}>{number}</a>
            </li>
          ))}
      </ul>
    
    </div>
  );
}
