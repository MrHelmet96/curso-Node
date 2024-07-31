
// const {getAge} = require('../plugins/get-age.plugin');
// const {getUUId} = require('../plugins/get-id.plugin');
//const {getAge, getUUId} = require('../plugins');
interface buildMakePersonOptions {
    getUUId: () => string,
    getAge: (birthdate: string) => number,
}
interface PersonOptions {
    name: string,
    birthdate: string,
}

export const buildMakePerson = ({getUUId, getAge}: buildMakePersonOptions) => {

    return ({name, birthdate}: PersonOptions) => {

        return {
            id: getUUId(),
            name: name,
            birthdate: birthdate,
            age: getAge(birthdate),
        }
    }
}


// const obj = {name: 'Jhon', birthdate: '1996-10-17'}

// const john = buildPerson(obj);

// console.log(john)

