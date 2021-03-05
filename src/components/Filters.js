import React from 'react';
import LogoTitle from '../images/RickandMorty.png';
import LogoSearch from '../images/RickAndMorty33.jpg';
import '../stylesheets/Filters.scss';

const Filters = (props) => {
  // Recogemos el valor introducido en el input y lo pasamos por lifting al componente manejador App
  const handleFilterName = (ev) => {
    console.log('handlefilter en filter',ev.currentTarget.value);
    console.log('handlefilterkey en filter',ev.currentTarget);
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
              onChange={handleFilterName}
            />
          </form>
        </div>
        <div className="header__box--title">
          <div className="header__logo">
            <img
              src={LogoTitle}
              className="header__logo"
              alt="Imagen Rick y Morty"
            />
          </div>
          <div className="header__title">
            <h1>Busca tus personajes de Rick y Morty</h1>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Filters;
