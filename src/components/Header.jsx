import { BiCloudDownload } from "react-icons/bi";
import styles from '../App.module.css';

const Header = () => (
    <div className={styles.header}>
        <div className={styles.left}>
            <h1>Tableau de bord</h1>
            {/* <ul className={styles.breadcrumb}>
                <li><a href="#">Analytics</a></li>/
                <li><a href="#" className={styles.active}>Shop</a></li>
            </ul> */}
        </div>
        <a href="#" className={styles.report}>
            <i className={styles.bx}><BiCloudDownload /></i>
            <span>Télécharger CSV</span>
        </a>
    </div>
);

export default Header;
