const { v4: uuidv4 } = require('uuid');

const getUUId = ()=> {
    return uuidv4();
}

module.exports = {getUUId,}