import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Characterdetail.scss';
import PropTypes from 'prop-types';

const CharacterDetail = (props) => {
  const handleModalContentClick = (ev) => {
    ev.preventDefault();
  };

  const iconFunction = () => {
    const status = props.status;
    // eslint-disable-next-line no-unused-vars
    let icon;
    if (props.status === 'Dead') {
      icon = 'far fa-dizzy';
    } else if (status === 'Alive') {
      icon = 'far fa-smile-beam';
    } else {
      icon = 'fas fa-question';
    }
  };

  return (
    <div className="container">
      <Link style={{ textDecoration: 'none' }} to="/">
        <div className="detailCard" onClick={handleModalContentClick}>
          <Link style={{ textDecoration: 'none' }} to="/">
            <span className="detailCard__back">
              <i class="fas fa-backward"></i> Volver{' '}
            </span>
          </Link>
          <div className="detailCard__img">
            <img src={props.image} alt={`Imagen de ${props.name}`} />
          </div>
          <div className="detailCard__text">
            <h2>{props.name}</h2>
            <ul className="detailsList">
              <li>
                Status: <span className="listData">{props.status} </span>{' '}
                <i class={iconFunction()}></i>
              </li>
              <li>
                Species: <span className="listData">{props.species} </span>
                {props.status === 'Alien' ? (
                  <i class="fab fa-reddit-alien"></i>
                ) : (
                  <i class="far fa-user"></i>
                )}
              </li>
              <li>
                Origin: <span className="listData">{props.origin.name}</span>
              </li>
              <li>
                Episodes: <span className="listData">{props.episodes}</span>
              </li>
            </ul>
          </div>
        </div>
      </Link>
    </div>
  );
};

CharacterDetail.propTypes = {
  name: PropTypes.string,
  species: PropTypes.string,
  status: PropTypes.string,
  origin: PropTypes.string,
  episodes: PropTypes.number,
  id: PropTypes.number,
  handleModalContentClick: PropTypes.func,
};

export default CharacterDetail;
