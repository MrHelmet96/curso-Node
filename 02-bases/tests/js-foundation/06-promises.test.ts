import {getPokemonNameById} from '../../src/js-foundation/06-promises';

describe('js-foundation/06-promises', () => {
    
    test('getPokemonNameById should return a pokemon name', async () => {
        const pokemonId = 1;
        const pokemonName = await getPokemonNameById(pokemonId);

        expect(pokemonName).toBe('bulbasaur');
    });

    test('getPokemonNameById should return an error if the pokemon does not exist', async () => {
        const pokemonId = 1000000;
        try {
            await getPokemonNameById(pokemonId);
        } catch (error) {
            expect(error).toBe(`Pokemon not found with id ${pokemonId}`);
        }
    });
});