const router = require('koa-router')()
const UserController = require('./../controllers/UserController');

router.prefix('/user')

router.get('/', async function (ctx, next) {
  const user = await UserController.get(ctx)
  ctx.body = {
    data: user
  }
})

router.post('/', async function (ctx, next) {
  const user = await UserController.create(ctx)
  ctx.body = {
    data: user
  }
})

module.exports = router
