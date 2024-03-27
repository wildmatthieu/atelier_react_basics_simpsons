import "./Character.css";
import PropTypes from "prop-types";

function Character({ firstname, lastname, imagePath }) {
  return (
    <div className="character-section">
      <figure className="character-card-container">
        <h2>
          {firstname} {lastname} 0 🍩
        </h2>
        <img className="img-box" src={imagePath} alt={firstname} />
      </figure>
      <button className="button-5" type="button">
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
  happyHomer: PropTypes.string,
};

export default Character;
