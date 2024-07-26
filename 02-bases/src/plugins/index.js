const {getAge} = require('../plugins/get-age.plugin');
const {getUUId} = require('../plugins/get-id.plugin');
const buildLogger = require('../plugins/logger.plugins');
const {http} = require('../plugins/http-client.plugin');

module.exports = {
    getAge,
    getUUId,
    http,
    buildLogger,
}