const Koa = require('koa')
const fs = require('fs')
const app = new Koa()
const Cors = require('@koa/cors')
const Helmet = require('koa-helmet')
const router = require('./router')
const BodyParser = require('koa-bodyparser')
const respond = require('koa-respond')


app.use(Helmet())
app.use(Cors())
app.use(respond())
app.use(BodyParser({
    enableTypes: ['json'],
    jsonLimit: '5mb',
    strict: true,
    onerror: function (err, ctx) {
      ctx.throw('body parse error', 422)
    }
  }))


app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3000, () => {
  console.log('koa-starter is starting at port 3000')
})