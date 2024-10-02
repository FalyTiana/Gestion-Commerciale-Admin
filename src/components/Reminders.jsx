import ReminderItem from './ReminderItem';
import { BiNote, BiFilter, BiPlus } from "react-icons/bi";
import styles from '../App.module.css';

const Reminders = () => (
    <div className={styles.reminders}>
        <div className={styles.header}>
            <i className={styles.bx}><BiNote /></i>
            <h3>Rappels</h3>
            <i className={styles.bx}><BiFilter /></i>
            <i className={styles.bx}><BiPlus /></i>
        </div>
        <ul className={styles.taskList}>
            <ReminderItem title="Start Our Meeting" completed />
            <ReminderItem title="Analyse Our Site" completed />
            <ReminderItem title="Play Football" />
        </ul>
    </div>
);

export default Reminders;
