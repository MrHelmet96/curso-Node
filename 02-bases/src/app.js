const {getAge, getUUId} = require('./plugins')

//const {emailTemplate} = require('./js-foundation/01-template');
//require('./js-foundation/02-destructuring');
// const {getUserById} = require('./js-foundation/03-callbacks');
// const {getUserById} = require('./js-foundation/04-arrow');
const { buildMakePerson } = require('./js-foundation/05-factory');

const makePerson = buildMakePerson({ getUUId, getAge});

const obj = {name: 'Juan', birthdate: '1995-6-28'};

const john = makePerson(obj);

console.log({john});