import { http } from '../plugins';

export const getPokemonNameById = async (id: string|number):Promise<string> => {

    try {

        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const pokemon = await http.get(url);
        return pokemon.name;

    } catch (error) {
        throw `Pokemon not found with id ${id}`;
    }


    

    // const resp = await fetch(url);
    // const pokemon = await resp.json();

    // throw new Error('Pokemon no existe');


    //! manejo antiguo 
    /*return fetch(url)
    .then((response) => response.json())
    //.then( () => {throw new Error('Pokemon no existe')})
    .then((pokemon) =>pokemon.name);*/

    };
