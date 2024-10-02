import { BiCalendarCheck, BiShowAlt, BiLineChart, BiDollarCircle } from "react-icons/bi";
import styles from '../App.module.css';

const insightsData = [
    { icon: <BiCalendarCheck />, count: '1,074', label: 'Payée' },
    { icon: <BiShowAlt />, count: '3,944', label: 'Visite' },
    { icon: <BiLineChart />, count: '14,721', label: 'Client' },
    { icon: <BiDollarCircle />, count: '$6,742', label: 'Ventes' },
];

const Insights = () => (
    <ul className={styles.insights}>
        {insightsData.map((item, index) => (
            <li key={index}>
                <i className={styles.bx}>{item.icon}</i>
                <span className={styles.info}>
                    <h3>{item.count}</h3>
                    <p>{item.label}</p>
                </span>
            </li>
        ))}
    </ul>
);

export default Insights;
