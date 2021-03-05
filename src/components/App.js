import React, { useEffect, useState } from 'react';
import '../stylesheets/App.scss';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import Filters from './Filters';
import getDataFromApi from '../services/getDataFromApi';
import { Route, Switch } from 'react-router-dom';
import ImgError from '../images/RickAndMortyError.png';

const App = () => {
  const [characters, setCharacters] = useState([]);
  /* El estado por defecto del filterName será, o vacío, o el valor que haya
  guardado en el LOCALSTORAGE */
  const [filterName, setFilterName] = useState(
    localStorage.getItem('filterName') || ''
  );
  const [filterSpecies, setFilterSpecies] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterGender, setFilterGender] = useState('all');

  /* Realizamos acciones en las diferentes fases del CICLO DE VIDA */

  // 1. Llamamos a los datos del API
  useEffect(() => {
    getDataFromApi().then((data) => {
      setCharacters(data);
    });
  }, []);

  // 2. Guardamos en el LOCALSTORAGE el valor introducido en el input
  //useEffect controla el ciclo de vida de nuestros componentes
  useEffect(() => {
    localStorage.setItem('filterName', filterName);
  }, [filterName]);

  /* ------------------------------------------------------------- */

  //Función que se encarga de pintar el detalle de las tarjetas

  const renderCharacterDetail = (props) => {
    const routeCharacterId = parseInt(props.match.params.characterId);
    const characterClicked = characters.find(
      (character) => character.id === routeCharacterId
    );
    
  console.log('characterClicked', characterClicked);
    // Si el url de la barra de busqueda/personaje existe, me pintas la tarjeta, sino el error
    if (characterClicked) {
      return (
        <CharacterDetail
          name={characterClicked.name}
          status={characterClicked.status}
          species={characterClicked.species}
          origin={characterClicked.origin}
          episodes={characterClicked.episode.length}
          image={characterClicked.image}
        />
      );
    } else {
      return (
        <div className="imgError">
          <img src={ImgError} alt="Personaje no encontrado" />
        </div>
      );
    }
  };

  // Función para ordenar alfabéticamente los personajes
  const orderName = () => {
    characters.sort((a, b) =>
      a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
    );
  };

  /* Función por LIFTING, recogemos el valor introducido en el input y los select
   y actualizamos el estado de cada filtro */
  const handleFilters = (data) => {
    console.log('handlefilter',data);
    console.log('handlefilter value',data.value);

    if (data.id === 'filterName') {
      setFilterName(data.value);
    } else if (data.id === 'filterSpecies') {
      setFilterSpecies(data.value);
    } else if (data.id === 'filterStatus') {
      setFilterStatus(data.value);
    } else if (data.id === 'filterGender') {
      setFilterGender(data.value);
    }
    console.log('CHARACTERS ', characters);

  };

  /* Función que se encarga de pintar/filtrar las tarjetas por nombre, especie, estado y género */
  const renderFilteredCharacter = () => {
    orderName();
    return characters
      .filter((character) => {
        const characters = character.name
          .toUpperCase()
          .includes(filterName.toUpperCase());
        return characters;
      })
      .filter((character) => {
        if (filterSpecies === 'all') {
          return true;
        } else {
          return character.species === filterSpecies;
        }
      })
      .filter((character) => {
        if (filterStatus === 'all') {
          return true;
        } else {
          return character.status === filterStatus;
        }
      })
      .filter((character) => {
        if (filterGender === 'all') {
          return true;
        } else {
          return character.gender === filterGender;
        }
      });
  };
  return (
    <div>
      <Route exact path="/">
        <Filters
          filterName={filterName}
          filterSpecies={filterSpecies}
          filterStatus={filterStatus}
          filterGender={filterGender}
          handleFilters={handleFilters}
        />
        <CharacterList
          filterName={filterName}
          characters={renderFilteredCharacter()}
        />
      </Route>
      <Switch>
        <Route
          exact
          path="/character/:characterId"
          render={renderCharacterDetail}
        />
      </Switch>
    </div>
  );
};

export default App;
