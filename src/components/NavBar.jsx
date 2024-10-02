/* eslint-disable react/prop-types */
import { BiSearch, BiXCircle, BiBell } from "react-icons/bi";
import { RiMenuFold2Fill, RiMenuFoldFill } from 'react-icons/ri';
import styles from '../App.module.css';

const NavBar = ({ menuClose, handleMenu, searchOpen, handleSearchToggle }) => (
    <nav>
        <i className={`${styles.bx} ${styles.bxMenu}`} onClick={handleMenu}>
            {menuClose ? <RiMenuFold2Fill /> : <RiMenuFoldFill />}
        </i>
        <form action="#" className={searchOpen && styles.show}>
            <div className={`${styles.formInput} ${searchOpen ? styles.show : ''}`}>
                <input type="search" placeholder="Rechercher..." />
                <button className={styles.searchBtn} onClick={handleSearchToggle}>
                    <i className={styles.bx}>{searchOpen ? <BiXCircle /> : <BiSearch />}</i>
                </button>
            </div>
        </form>
        <input type="checkbox" id="theme-toggle" hidden />
        <label htmlFor="theme-toggle" className={styles.themeToggle}></label>
        <a href="#" className={styles.notif}>
            <i className={styles.bx}><BiBell /></i>
            <span className={styles.count}>12</span>
        </a>
        <a href="#" className={styles.profile}>
            <img src="images/logo.png" alt="profile" />
        </a>
    </nav>
);

export default NavBar;
