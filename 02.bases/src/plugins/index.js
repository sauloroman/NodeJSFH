const { http } = require('../plugins/http-client.plugin')
const { getID } = require('../plugins/get-id.plugin')
const { getAge } = require('../plugins/get-age.plugin')

module.exports = {
  http,
  getID,
  getAge
}