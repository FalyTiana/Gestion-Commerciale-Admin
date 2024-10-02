/* eslint-disable react/prop-types */
import { BiCheckCircle, BiXCircle, BiDotsVerticalRounded } from "react-icons/bi";
import styles from '../App.module.css';

const ReminderItem = ({ title, completed }) => (
    <li className={completed ? styles.completed : styles.notCompleted}>
        <div className={styles.taskTitle}>
            <i className={styles.bx}>{completed ? <BiCheckCircle /> : <BiXCircle />}</i>
            <p>{title}</p>
        </div>
        <i className={styles.bx}><BiDotsVerticalRounded /></i>
    </li>
);

export default ReminderItem;
