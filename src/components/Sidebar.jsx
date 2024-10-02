/* eslint-disable react/prop-types */
import { BiCodeAlt, BiSolidDashboard, BiStoreAlt, BiAnalyse, BiMessageSquareDots, BiGroup, BiCog, BiLogOutCircle } from "react-icons/bi";
import styles from '../App.module.css';
import { NavLink } from "react-router-dom";

const menuItems = [
    { icon: <BiSolidDashboard />, label: 'Tableau de bord', path: '/' },
    { icon: <BiStoreAlt />, label: 'Boutique', path: '/boutique' },
    { icon: <BiAnalyse />, label: 'Analytique', path: '/analytique' },
    { icon: <BiMessageSquareDots />, label: 'Tickets', path: '/tickets' },
    { icon: <BiGroup />, label: 'Utilisateur', path: '/utilisateur' },
    { icon: <BiCog />, label: 'Paramètre', path: '/parametre' },
];

const Sidebar = ({ menuClose }) => (
    <div className={`${styles.sidebar} ${menuClose ? styles.close : ''} sidebar`}>
        <a href="#" className={styles.logo}>
            <i className={styles.bx}><BiCodeAlt /></i>
            <div className={styles.logoName}><span>Asmr</span>Prog</div>
        </a>
        <ul className={styles.sideMenu}>
            {menuItems.map((item, index) => (
                <li key={index} className={({ isActive }) => isActive ? styles.active : ''}>
                    <NavLink to={item.path}><i className={styles.bx}>{item.icon}</i>{item.label}</NavLink>
                </li>
            ))}
        </ul>
        <ul className={styles.sideMenu}>
            <li>
                <a href="#" className={styles.logout}>
                    <i className={styles.bx}><BiLogOutCircle /></i>Déconnexion
                </a>
            </li>
        </ul>
    </div>
);

export default Sidebar;


