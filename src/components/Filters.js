import React from 'react';
import LogoTitle from '../images/RickandMorty.png';
import LogoSearch from '../images/RickAndMorty33.jpg';
import '../stylesheets/Filters.scss';

const Filters = (props) => {
  // Recogemos el valor introducido en el input y lo pasamos por lifting al componente manejador App
  const handleFilter = (ev) => {
    props.handleFilters(ev.currentTarget);
  };

  const handleModalContentClick = (ev) => {
    ev.preventDefault();
  };

  return (
    <header className="header">
      <section className="header__box">
        <div className="header__img">
          <img
            src={LogoSearch}
            className="header__img"
            alt="Imagen Rick y Morty hablando"
          />
        </div>
        <div className="header__input">
          <form onSubmit={handleModalContentClick}>
            <input
              type="text"
              placeholder="Nombre del personaje..."
              key="filterName"
              id="filterName"
              value={props.filterName}
              onChange={handleFilter}
            />
          </form>
        </div>
{/* // */}
<div className='header--filter__box'>
            <label htmlFor='filterSpecies' className='form__label '>
              Specy:
            </label>
            <select
              id='filterSpecies'
              value={props.filterSpecies}
              onChange={handleFilter}
            >
              <option value='all'>All</option>
              <option value='Human'>Human</option>
              <option value='Alien'>Alien</option>
            </select>
          </div>

          <div className='header--filter__box'>
            <label htmlFor='filterStatus' className='form__label '>
              Vital status:
            </label>
            <select
              id='filterStatus'
              value={props.filterStatus}
              onChange={handleFilter}
            >
              <option value='all'>All</option>
              <option value='Alive'>Alive</option>
              <option value='Dead'>Dead</option>
              <option value='unknown'>Unknown</option>
            </select>
          </div>
          <div className='header--filter__box'>
            <label htmlFor='filterGender' className='form__label '>
            Gender:
            </label>
            <select
              id='filterGender'
              value={props.filterGender}
              onChange={handleFilter}
            >
              <option value='all'>All</option>
              <option value='Female'>Female</option>
              <option value='Male'>Male</option>
            </select>
          </div>
{/* // */}
        <div className="header__box--title">
          <div className="header__logo">
            <img
              src={LogoTitle}
              className="header__logo"
              alt="Rick and Morty"
            />
          </div>
          <div className="header__title">
            <h1>Rick and Morty characters</h1>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Filters;
