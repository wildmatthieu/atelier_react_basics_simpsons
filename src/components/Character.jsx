import PropTypes from 'prop-types';

function Character({firstname, lastname, imagePath})
{
    // en php 
    // $coucou: int = 42 // <- typé car on précise que c'est un int à sa création

    console.log(imagePath);

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