import OrderRow from './OrderRow';
import { BiReceipt, BiFilter, BiSearch } from "react-icons/bi";
import styles from '../App.module.css';

const Orders = () => (
    <div className={styles.orders}>
        <div className={styles.header}>
            <i className={styles.bx}><BiReceipt /></i>
            <h3>Commandes récentes</h3>
            <i className={styles.bx}><BiFilter /></i>
            <i className={styles.bx}><BiSearch /></i>
        </div>
        <table>
            <thead>
                <tr>
                    <th>Client</th>
                    <th>Prix (Ar)</th>
                    <th>Payé</th>
                    <th>Date</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <OrderRow user="John Doe" prix="200 000" paye={true} date="14-08-2023" status="Completed" />
                <OrderRow user="John Doe" prix="200 000" paye={true} date="14-08-2023" status="Pending" />
                <OrderRow user="John Doe" prix="200 000" paye={false} date="14-08-2023" status="Processing" />
            </tbody>
        </table>
    </div>
);

export default Orders;
