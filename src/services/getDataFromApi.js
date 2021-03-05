const getDataFromApi = () => {
  return fetch('https://rickandmortyapi.com/api/character/#') //si no pones retorno, va a ser undefined
    .then((response) => response.json())
    .then((data) => {
      return data.results.sort(function (a, b) {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      }); //debemos retornar para que se pinte algo
      //para limpiar lso codigos antes de traermelo, traerme un array, no todos los datos
      //escribo la propiedad para acceder a ella return data.items por ejemplo
    });
};

export default getDataFromApi;

//si no tienes ID en la API, la creamos aquí
//lo recorremos con map y añadimos algunas modificaciones:
//tambien se podría con un push

// .then((data) => {
//   const items =data.cart.items.map ((item, index)=> item.id='id-'+index;return item;});
//   return items});
// }; video a las 11.23
