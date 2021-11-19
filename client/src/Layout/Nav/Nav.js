import React from 'react'
import {NavLink} from 'react-router-dom';
import styles from './nav.module.css';

const Nav = () => {
    return (        
         <div className={styles.contentNav}>
            <NavLink to='/home' exact className={styles.navLink}>
                <h1 className={styles.h1}>Home</h1>
            </NavLink>
            <NavLink to='newbreed' exact className={styles.navLink}>                
                <h1 className={styles.h1}>New Breed</h1>
            </NavLink>
            <NavLink to='/about' exact className={styles.navLink}>
                <h1 className={styles.h1}>About</h1>
            </NavLink>
        </div>         
    )
}

export default Nav;
