
// const {getAge} = require('../plugins/get-age.plugin');
// const {getUUId} = require('../plugins/get-id.plugin');
//const {getAge, getUUId} = require('../plugins');

const buildMakePerson = ({getUUId, getAge}) => {

    return ({name, birthdate}) => {

        return {
            id: getUUId(),
            name: name,
            birthdate: birthdate,
            age: getAge(birthdate),
        }
    }
}
module.exports = {buildMakePerson,};

// const obj = {name: 'Jhon', birthdate: '1996-10-17'}

// const john = buildPerson(obj);

// console.log(john)

