const Router = require('koa-router')
const home = require('./home')

let router = new Router()

router.use('/', home.routes(), home.allowedMethods())

module.exports = router