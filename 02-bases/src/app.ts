import { getPokemonNameById } from "./js-foundation/06-promises";
import { buildLogger } from "./plugins/logger.plugins";

//const {getAge, getUUId} = require('./plugins')
//const {emailTemplate} = require('./js-foundation/01-template');
//require('./js-foundation/02-destructuring');
// const {getUserById} = require('./js-foundation/03-callbacks');
// const {getUserById} = require('./js-foundation/04-arrow');
// const getPokemonById = require('./js-foundation/06-promises');
// const {buildLogger} = require('./plugins');


const logger = buildLogger('app.js');

logger.log('Hola mundo');
logger.error('Error de prueba');




getPokemonNameById(3).then()


    /*.then((pokemon) => console.log({pokemon}))
    .catch((error) => console.log({error}))
    .finally( () => console.log('Finalmente'));*/



// ! ejercicio de factory functions
/*const { buildMakePerson } = require('./js-foundation/05-factory');
const makePerson = buildMakePerson({ getUUId, getAge});
const obj = {name: 'Juan', birthdate: '1995-6-28'};
const john = makePerson(obj);
console.log({john});*/

