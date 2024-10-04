import ProduitCard from "./ProduitCard"
import styles from "./ProduitList.module.css"

const produits = [
    {
        nom: "T-shirt",
        image: "https://via.placeholder.com/200",
        prix_unitaire: 20.0,
        unites_de_mesure: [
            { nom: "Pièce", abbreviation: "pcs" }
        ],
        variants: [
            {
                nom: "Variant 1",
                caracteristiques: { couleur: "rouge", taille: "M", materiau: "coton" },
                ajout_de_prix: 2.0,
                image: "https://via.placeholder.com/150"
            },
            {
                nom: "Variant 2",
                caracteristiques: { couleur: "bleu", taille: "L", materiau: "polyester" },
                ajout_de_prix: 3.0,
                image: "https://via.placeholder.com/150"
            }
        ]
    },
    {
        nom: "Pantalon",
        image: "https://via.placeholder.com/200",
        prix_unitaire: 35.0,
        unites_de_mesure: [
            { nom: "Pièce", abbreviation: "pcs" }
        ],
        variants: [
            {
                nom: "Variant 1",
                caracteristiques: { couleur: "noir", taille: "L", materiau: "jean" },
                ajout_de_prix: 4.0,
                image: "https://via.placeholder.com/150"
            },
            {
                nom: "Variant 2",
                caracteristiques: { couleur: "bleu", taille: "M", materiau: "jean" },
                ajout_de_prix: 3.5,
                image: "https://via.placeholder.com/150"
            }
        ]
    }
];

function ProduitList() {
    if (!produits || produits.length === 0) {
        return <p>Aucun produit disponible.</p>; // Si pas de produits, afficher un message
    }
    return (
        <div className={styles.productsList}>
        {produits.map((produit, index) => (
          <ProduitCard key={index} produit={produit} />
        ))}
      </div>
    )
}

export default ProduitList