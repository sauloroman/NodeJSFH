const { buildLogger } = require('../plugins')

const logger = buildLogger('app.js')

logger.log('Hello World')
logger.error('Esto es un error')


