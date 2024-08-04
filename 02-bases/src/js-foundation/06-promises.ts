import { http } from '../plugins';

export const getPokemonNameById = async (id: string|number):Promise<string> => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    const pokemon = await http.get(url);

    // const resp = await fetch(url);
    // const pokemon = await resp.json();

    // throw new Error('Pokemon no existe');

    return pokemon.name;

    //! manejo antiguo 
    /*return fetch(url)
    .then((response) => response.json())
    //.then( () => {throw new Error('Pokemon no existe')})
    .then((pokemon) =>pokemon.name);*/

    };
