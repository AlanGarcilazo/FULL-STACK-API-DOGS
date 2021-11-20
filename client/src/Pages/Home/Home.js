import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getDogs,
  filterByValue,
  filterByTemperament,
  filterCreated,
  getTemperaments,
} from "../../action/index";

import Footer from "../../Layout/Footer/Footer";
import Nav from "../../Layout/Nav/Nav";
import Cards from "../../Components/Cards/Cards";
import Paginator from "../../Components/Paginator/Paginator";
import SearchBar from "../../Components/SearchBar/SearchBar";
import s from "./home.module.css";

const Home = () => {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.dogs);
  const temperaments = useSelector((state) => state.temperaments);
  const [currentPage, setCurrentPage] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [orden, setOrden] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [dogsPerPage, setDogsPage] = useState(8);
  //
  /**
   * El índice del último perro es: la página actual (Default: 1), por la cantidad de perros por página (Default: 9).
   */
  const indexOfLastDog = currentPage * dogsPerPage; // 9
  //|||||||||||||||||||||||||||||||||||||||||||||||
  /**
   * El índice del primer perro es: el índice del último perro (Default: 9), menos la cantidad de perros por página (Default: 9).
   */
  const indexOfFirstDog = indexOfLastDog - dogsPerPage; // 0
  //||||||||||||||||||||||||||||||||||||||||||||||||
  /**
   * La constante agarra solo las porciones que estan marcadas en los parámetros, que serían el índice del primer perro (0), hasta el índice del último perro (9), por lo tanto quedarían solo 9 perros por página. Renderizando desde el perro numero 0 hasta el perro numero 8, siendo 9 perros en total. Magic.
   * PÁGINA 1 -> Primer perro 0 <---> Último perro 9.
   * PÁGINA 2 -> Primer perro 10 <---> Último perro 19.
   */
  const currentDogs = allDogs.slice(indexOfFirstDog, indexOfLastDog);
  //+
  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  useEffect(() => {
    dispatch(getDogs());
    dispatch(getTemperaments());
  }, [dispatch]);
  function handleClick(e) {
    e.preventDefault();
    dispatch(getDogs());
    setCurrentPage(1);
  }
  function handleFilterValue(e) {
    e.preventDefault();
    dispatch(filterByValue(e.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`);
  }
  const handleFilterTemperament = (e) => {
    console.log(e.target.value);
    dispatch(filterByTemperament(e.target.value));
    setCurrentPage(1);
  };
  function handleFrom(e) {
    e.preventDefault();
    dispatch(filterCreated(e.target.value));
  }

  return (
    <>
      <Nav />
      <div className={s.containerPhader}>
        <div className={s.variosSele}>
          <select className={s.sele} onChange={(e) => handleFilterValue(e)}>
            <option className={s.options} value="AZ">Order A-Z</option>
            <option className={s.options} value="ZA">Order Z-A</option>
            <option className={s.options} value="LESS">Order Less Weight</option>
            <option className={s.options} value="HIGH">Order Higher Weight</option>
          </select>
          <select className={s.sele} onChange={(e) => handleFrom(e)}>
            <option className={s.options} value="ALL">All Breeds</option>
            <option className={s.options} value="CREATED">Created Breeds</option>
            <option className={s.options} value="API">Dogs Api</option>
          </select>
          <select
            className={s.sele}
            onChange={(e) => handleFilterTemperament(e)}
          >
            <option className={s.options} value="all">All Temperaments</option>
            {temperaments?.map((elem) => (
              <option className={s.options} value={elem.name} key={elem.id}>
                {elem.name}
              </option>
            ))}
          </select>
        </div>

        <div className={s.searchButton}>
          <SearchBar />
          <div className={s.button}>
            <button className={s.btn1}
              onClick={(e) => {
                handleClick(e);
              }}
            >
              {" "}
              Reload the Breeds!{" "}
            </button>
          </div>
        </div>

        <div className={s.containerCards}>
          {currentDogs &&
            currentDogs.map((el) => {
              return (
                <Link to={"/dogs/" + el.id}>
                  <Cards 
                    name={el.name}
                    img={el.img ? el.img : el.image}
                    temperament={el.temperament}
                    temperaments={el.temperaments}
                    id={el.id}
                    className={s.cardiana}
                  />
                </Link>
              );
            })}
        </div>

        <div className={s.paginator}>
          <Paginator
            dogsPerPage={dogsPerPage}
            allDogs={allDogs.length}
            paginado={paginado}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
