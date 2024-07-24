const users = [
    {
        id: 1,
        name: 'Ryan',
    },
    {
        id: 2,
        name: 'Ramona',
    },
];
 // Sin función de flecha
/* function getUserById(id, callback) {
    const user = users.find( function(user) {
        return user.id === id;
    });

    if(!user){
        return callback(`User not found with id: ${id}`);
    }

    return callback(null, user);
} */

// como función de flecha
const getUserById = (id, callback) => {
    const user = users.find((user) =>  user.id === id);

    // expresión ternaria
    (user)
    ? callback(null, user)
    : callback(`User not found with id: ${id}`);

//expresión "standar" o "normal"
/*    if(!user){
        return callback(`User not found with id: ${id}`);
    }

    return callback(null, user);*/
}

module.exports = {
    getUserById,
}