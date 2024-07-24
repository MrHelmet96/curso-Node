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

function getUserById(id, callback) {
    const user = users.find( function(user){
        return user.id === id;
    });

    if(!user){
        return callback(`User not found with id: ${id}`);
    }

    return callback(null, user);
}

module.exports = {
    getUserById,
}