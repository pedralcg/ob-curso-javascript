// Instalar axios para hacer llamadas a servicio externos
// npm i axios

// const pokeapi = 'https://pokeapi.co/api/v2/pokemon/ditto'

import axios from "axios"

// const axios = requiere("axios").default;

// Make a request for a user with a given ID
axios.get('https://pokeapi.co/api/v2/pokemon/mew')
  .then(function (response) {
    // handle success
    console.log("Success!!!");
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log("Error!!!");
    console.log(error);
  })
  .finally(function () {
    // always executed
    console.log("Ejecutado!!!");
  });