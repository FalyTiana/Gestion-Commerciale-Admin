// import ProduitListeTest from "../../components/Boutique/ProduitListeTest";
import ProduitList from "../../components/Boutique/ProduitList";
import styles from "./Boutique.module.css";

function Boutique() {

  return (
    <div className={styles.container}>
      {/* <ProduitListeTest/> */}
      <ProduitList/>
    </div>
  );
}

export default Boutique;
