
const obj = {name: 'Jhon', birthdate: '1996-10-17'}


const buildPerson = ({name, birthdate}) => {


    return {
        id: new Date().getTime(),
        name: name,
        birthdate: birthdate,
        age: new Date().getFullYear() - new Date(birthdate).getFullYear(),
    }
}


const john = buildPerson(obj);

console.log(john)

