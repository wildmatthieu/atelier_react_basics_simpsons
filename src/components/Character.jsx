import { useState } from "react";
import "./Character.css";
import PropTypes from "prop-types";

function Character({
  firstname,
  lastname,
  imagePath,
  happyHomer,
  //ETAPE 3 : Bien penser à importer les props ici
  donuts,
  setDonuts,
}) {
  // ETAPE 4 : On crée une fonction fléchée pour modifier la valeur du state grâce au setter
  // Dans la fonction suivante, on prend les props et on défini la logique à appliquer sur ses props
  const handleAddDonut = () => {
    setDonuts(donuts + 1);
    // le code ci-dessus est générique, il sera remplacé par le code ci-dessous lors de l'appel de ce composant avec les infos d'Homer :
    //  sethomerDonut(homerDonut + 1);
  };

  // ---------------------- BONUS  ----------------------------------------------
  // const fullHomer =
  //   "https://www.stickees.com/files/cartoon/the-simpsons/2245-homer-simpson-donut.png";

  // Fonction pour gérer + que 2 cas d'usage

  // function renderHomer() {
  //   if (donuts >= 10 && donuts < 20) {
  //     return happyHomer;
  //   } else if (donuts >= 20) {
  //     return fullHomer;
  //   } else {
  //     return imagePath;
  //   }
  // }
  // -----------------------------------------------------------------------------
  return (
    <div className="character-section">
      <figure className="character-card-container">
        <h2>
          {/* ETAPE 5 : on affiche le contenu de nos props dont celle du state "donuts" */}
          {firstname} {lastname} {donuts} 🍩
        </h2>
        <img
          className="img-box"
          src={donuts >= 10 && firstname === "Homer" ? happyHomer : imagePath}
          //  Est-ce que la valeur de la props donuts (donc homerDonut ou bartDonut) est supérieur ou égale à 10 ET le la props firstname vaut "Homer" ?
          // Si oui, on affiche l'image de Homer Joyeux
          // Sinon, on affiche l'image de base
          // ------ Variante pour utiliser la function renderHomer() : src={renderHomer()}  ---------
          alt={firstname}
        />
      </figure>
      {/* ETAPE 6 : On appelle la fonction handleAddDonut dans la propriété onClick du bouton */}
      <button className="button-5" type="button" onClick={handleAddDonut}>
        feed me
        <img
          src="https://www.stickees.com/files/cartoon/the-simpsons/2370-pink-donut.png"
          alt="donut"
          className="donut-btn"
        />
      </button>
    </div>
  );
}

Character.propTypes = {
  lastname: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  donuts: PropTypes.number.isRequired,
  setDonuts: PropTypes.number.isRequired,
  happyHomer: PropTypes.string, // happyHomer n'est pas obligatoire car il n'y a que Homer qu'il en dispose. Bart ne l'as pas donc on ne met pas l'atribut 'isrequired'.
};

export default Character;
