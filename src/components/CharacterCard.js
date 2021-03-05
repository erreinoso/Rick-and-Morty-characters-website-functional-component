import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../stylesheets/CharacterList.scss';

function CharacterCard(props) {
  console.log('CharacterCard',props)
  return (
    <Link style={{ textDecoration: 'none' }} to={`/character/${props.id}`}>
      <li className={`serieCard serieCard-${props.id}`}>
        <div className={`serieCard__img serieCard__img-${props.id}`}>
          <img src={props.image} alt={`Imagen de ${props.name}`} />
        </div>
        <div className="serieCard__text">
          <h2 className="name">{props.name}</h2>
          <h3 className="species">
            {props.species} {props.species === 'Alien' ? '👽' : '🧑'}
          </h3>
        </div>
      </li>
    </Link>
  );
}
CharacterCard.propTypes = {
  species: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.number,
};

export default CharacterCard;
