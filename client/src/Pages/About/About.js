import React from "react";
import Nav from "../../Layout/Nav/Nav";
import Footer from "../../Layout/Footer/Footer";
import styles from "./about.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNode } from "@fortawesome/free-brands-svg-icons";
import sequelize from "../../img/brand_logo.png";

const About = () => {
  

  return (
    <>

      <Nav />
      <div className={styles.contentAbout}></div>
      <div className={styles.cardContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.h1Title}>PI-DOGS</h1>
          <p className={styles.pText}>
            Hola ! Este Proyecto lo cree desde 0, mediante tecnologias Full
            Stack, tanto Back-end como Front-end para la cursada{" "}
            <a
              className={styles.links}
              href="https://www.soyhenry.com/"
              target="n_blank"
              rel="henry"
            >
              {" "}
              Henry bootcamp
            </a>
            . Para mapear todas las diferentes razas, esta aplicación consume
            datos de{" "}
            <a
              className={styles.links}
              href="https://thedogapi.com/"
              target="n_blank"
              rel="dogs api"
            >
              the dogs API
            </a>
            . También es posible crear una nueva raza de perro, ingresando un
            nombre, peso, altura, vida útil y temperamentos. Si usted desea
            hacerlo, Dirijase a{" "}
            <Link to="/newbreed" exact className={styles.links}>
              New Breed
            </Link>{" "}
            !
          </p>
          <p className={styles.pText}>
            Si le gusto mi proyecto y usted tiene una propuesta laboral,{" "}
            <a href="#contactos" className={styles.links} >
              Aca
            </a>{" "}
            dejo mis contactos!
          </p>
        </div>
        <div className={styles.cardContent}>
          <div className={styles.cardTitle}>
            <h1 className={styles.h1Title2}>Tecnologías Aplicadas</h1>
            <div className={styles.tecContent}>
              <div>
                <img
                  className={styles.js}
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                  alt="js"
                />
                <h1 className={styles.jsh1}>Javascript</h1>
              </div>
              <div>
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                  alt="html"
                />
                <h1 className={styles.tecH1}>HTML 5</h1>
              </div>
              <div>
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                  alt="css"
                />
                <h1 className={styles.tecH1}>CSS 3</h1>
              </div>
              <div>
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                  alt="react"
                />
                <h1 className={styles.tecH1}>React</h1>
              </div>
              <div>
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
                  alt="redux"
                />
                <h1 className={styles.tecH1}>Redux</h1>
              </div>
              <div>
                <FontAwesomeIcon className={styles.icons} icon={faNode} />
                <h1 className={styles.node}>Node Js</h1>
              </div>
              <div>
                <img
                  className={styles.express}
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
                  alt="express"
                />
                <h1 className={styles.tecH1}>Express</h1>
              </div>
              <div>
                <img
                  className={styles.sequelizeimg}
                  src={sequelize}
                  alt="sequelize"
                />
                <h1 className={styles.tecH1}>Sequelize ORM</h1>
              </div>
              <div>
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
                  alt="postgre"
                />
                <h1 className={styles.tecH1}>PostgreSQL</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
