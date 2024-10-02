import Orders from './Orders';
import Reminders from './Reminders';
import styles from '../App.module.css';

const BottomData = () => (
    <div className={styles.bottomData}>
        <Orders />
        <Reminders />
    </div>
);

export default BottomData;
