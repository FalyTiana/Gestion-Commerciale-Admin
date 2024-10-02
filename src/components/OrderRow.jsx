/* eslint-disable react/prop-types */
import styles from '../App.module.css';

const OrderRow = ({ user,prix, paye, date, status }) => (
    <tr>
        <td>
            <img src="images/profile-1.jpg" alt="profile" />
            <p>{user}</p>
        </td>
        <td>{prix}</td>
        <td>{paye? "Oui" : "Non"}</td>
        <td>{date}</td>
        <td><span className={`${styles.status} ${styles[status.toLowerCase()]}`}>{status}</span></td>
    </tr>
);

export default OrderRow;
