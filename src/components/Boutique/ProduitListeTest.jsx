import { useEffect, useState } from 'react'
import styles from "./ProduitListeTest.module.css"

function ProduitListeTest() {

    const produits = [
        {
            id: 1,
            nom: "Nom du produit",
            variations: [
                { couleur: "Rouge", tissu: "Coton", taille: "S", prix: "5000 Ar", image: "image1.jpg" },
                { couleur: "Rouge", tissu: "Coton", taille: "M", prix: "5500 Ar", image: "image2.jpg" },
                { couleur: "Rouge", tissu: "Polyester", taille: "L", prix: "6000 Ar", image: "image3.jpg" },
                { couleur: "Bleu", tissu: "Coton", taille: "S", prix: "5200 Ar", image: "image4.jpg" },
                { couleur: "Bleu", tissu: "Polyester", taille: "M", prix: "5800 Ar", image: "image5.jpg" },
                { couleur: "Vert", tissu: "Polyester", taille: "L", prix: "6100 Ar", image: "image6.jpg" },
            ],
        },
    ];

    const [selectedIndex, setSelectedIndex] = useState({
        couleur: 0,
        tissu: 0,
        taille: 0,
    });

    // Fonction pour extraire les valeurs uniques de chaque caractéristique
    const getUniqueValues = (variations, key) => {
        return [...new Set(variations.map((variation) => variation[key]))];
    };

    // Fonction pour obtenir les options valides basées sur les sélections actuelles
    const getValidOptions = (produit, selectedCouleur) => {
        const validTissus = getUniqueValues(
            produit.variations.filter((variation) => variation.couleur === selectedCouleur),
            "tissu"
        );
        const selectedTissu = validTissus[selectedIndex.tissu] || validTissus[0];

        const validTailles = getUniqueValues(
            produit.variations.filter(
                (variation) => variation.couleur === selectedCouleur && variation.tissu === selectedTissu
            ),
            "taille"
        );

        return { validTissus, validTailles, selectedTissu };
    };

    const handleNext = (type, length) => {
        setSelectedIndex((prevIndex) => ({
            ...prevIndex,
            [type]: (prevIndex[type] + 1) % length,
        }));
    };

    const handlePrev = (type, length) => {
        setSelectedIndex((prevIndex) => ({
            ...prevIndex,
            [type]: (prevIndex[type] - 1 + length) % length,
        }));
    };

    const handleAddToCart = (produit, couleur, tissu, taille) => {
        const currentVariation = produit.variations.find(
            (variation) => variation.couleur === couleur && variation.tissu === tissu && variation.taille === taille
        );

        if (currentVariation) {
            alert(`Produit ajouté au panier :
            ${produit.nom}, Couleur: ${couleur}, Tissu: ${tissu}, Taille: ${taille}, Prix: ${currentVariation.prix}`);
        } else {
            alert("Cette combinaison n'est pas disponible.");
        }
    };

    useEffect(() => {
        const produit = produits[0];
        const couleurs = getUniqueValues(produit.variations, "couleur");
        const selectedCouleur = couleurs[selectedIndex.couleur];

        const { validTissus, validTailles } = getValidOptions(produit, selectedCouleur);

        // Réinitialiser l'index des tailles si la taille sélectionnée n'est plus valide
        if (selectedIndex.taille >= validTailles.length) {
            setSelectedIndex((prevIndex) => ({
                ...prevIndex,
                taille: 0, // Réinitialiser à la première taille disponible
            }));
        }

        // Réinitialiser l'index du tissu si le tissu sélectionné n'est plus valide
        if (selectedIndex.tissu >= validTissus.length) {
            setSelectedIndex((prevIndex) => ({
                ...prevIndex,
                tissu: 0, // Réinitialiser à la première option de tissu disponible
            }));
        }
    }, [selectedIndex.couleur, selectedIndex.tissu]); // Dépendances pour déclencher useEffect


    return (
        <div className={styles.containerCard}>
            {produits.map((produit) => {
                // Récupérer les options uniques de chaque caractéristique
                const couleurs = getUniqueValues(produit.variations, "couleur");
                const selectedCouleur = couleurs[selectedIndex.couleur];

                // Obtenir les options valides pour tissus et tailles basées sur la couleur sélectionnée
                const { validTissus, validTailles, selectedTissu } = getValidOptions(
                    produit,
                    selectedCouleur
                );

                const selectedTaille = validTailles[selectedIndex.taille] || validTailles[0];

                // Récupérer la variation actuelle en fonction des sélections
                const currentVariation = produit.variations.find(
                    (variation) =>
                        variation.couleur === selectedCouleur &&
                        variation.tissu === selectedTissu &&
                        variation.taille === selectedTaille
                );

                return (
                    <div key={produit.id} className={styles.card}>
                        <div className={styles.imgCard}>
                            {/* Image du produit selon la sélection */}
                            <img
                                src={currentVariation ? currentVariation.image : produit.variations[0].image}
                                alt={produit.nom}
                            />
                        </div>
                        <div className={styles.buttomCard}>
                            <div className={styles.title}>
                                <p className={styles.name}>{produit.nom}</p>
                                {/* Affichage du prix selon la sélection */}
                                <p className={styles.price}>
                                    {currentVariation ? currentVariation.prix : produit.variations[0].prix}
                                </p>
                            </div>
                            <div className={styles.feature}>
                                {/* Sélection de la couleur */}
                                <div className={styles.featureItem}>
                                    <p>Couleur :</p>
                                    <div>
                                        <button
                                            onClick={() => handlePrev("couleur", couleurs.length)}
                                            disabled={couleurs.length <= 1}
                                        >
                                            {"<"}
                                        </button>
                                        <span>{selectedCouleur}</span>
                                        <button
                                            onClick={() => handleNext("couleur", couleurs.length)}
                                            disabled={couleurs.length <= 1}
                                        >
                                            {">"}
                                        </button>
                                    </div>
                                </div>

                                {/* Sélection du tissu - seules les options valides sont proposées */}
                                <div className={styles.featureItem}>
                                    <p>Tissu :</p>
                                    <div>
                                        <button
                                            onClick={() => handlePrev("tissu", validTissus.length)}
                                            disabled={validTissus.length <= 1}
                                            className={validTissus.length <= 1 ? styles.disable : ''}
                                        >
                                            {"<"}
                                        </button>
                                        <span>{selectedTissu}</span>
                                        <button
                                            onClick={() => handleNext("tissu", validTissus.length)}
                                            disabled={validTissus.length <= 1}
                                        >
                                            {">"}
                                        </button>
                                    </div>
                                </div>

                                {/* Sélection de la taille - seules les options valides sont proposées */}
                                <div className={styles.featureItem}>
                                    <p>Taille :</p>
                                    <div>
                                        <button
                                            onClick={() => handlePrev("taille", validTailles.length)}
                                            disabled={validTailles.length <= 1}
                                        >
                                            {"<"}
                                        </button>
                                        <span>{selectedTaille}</span>
                                        <button
                                            onClick={() => handleNext("taille", validTailles.length)}
                                            disabled={validTailles.length <= 1}
                                        >
                                            {">"}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.buttonContainer}>
                                <button
                                    aria-label={`Ajouter ${produit.nom} au panier`}
                                    onClick={() =>
                                        handleAddToCart(produit, selectedCouleur, selectedTissu, selectedTaille)
                                    }
                                >
                                    Ajouter au panier
                                </button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default ProduitListeTest