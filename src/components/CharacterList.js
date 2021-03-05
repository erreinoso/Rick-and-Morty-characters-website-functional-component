import React from 'react';
import CharacterCard from './CharacterCard';
import '../stylesheets/CharacterList.scss';


const CharacterList = (props) => {
  
  console.log('character list',props.characters.length);

  if (props.characters.length === 0 ){
    return (
      <main>
        <ul className="list">
            <p className="list__error">
              No hay ningun personaje que coincida con {props.filterText}
            </p>
        </ul>
      </main>)
          
  }else{

  const charactersList =props.characters.map((character, index) => {
      return (
          <CharacterCard
              key={index}
              id={character.id}
              name={character.name}
              species={character.species}
              image={character.image}
            />
        );
  })

  return (
  <main>
    <ul className="list">{charactersList} </ul>
  </main>);}
}


export default CharacterList;

