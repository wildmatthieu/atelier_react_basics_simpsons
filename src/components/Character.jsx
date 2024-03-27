import PropTypes from 'prop-types';

function Character({firstname, lastname, imagePath})
{

    return (
        <div>
            <h2>{firstname} {lastname}</h2>
            <img src={imagePath} alt={firstname} />
        </div>
    )
}

Character.propTypes= {
    lastname: PropTypes.string.isRequired,
    firstname: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired
}

export default Character;