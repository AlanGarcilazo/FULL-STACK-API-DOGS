import React from "react";
import { Link } from "react-router-dom";
import styles from "./landingPage.module.css";

const LandingPage = () => {
  return (
    <div className={styles.contentNav}>
      <h1 className={styles.h1}>PI-DOGS!</h1>
      <Link className={styles.link} to="/home" exact>
        WELCOME
      </Link>
    </div>
  );
};

export default LandingPage;
