const  Router = require('express')
const router = new Router()
const postRouter = require('./postRouter')
const userRouter = require('./userRouter')
const subscriptionRouter = require('./subscriptionRouter')

router.use('/user', userRouter)
router.use('/post', postRouter)
router.use('/subscription', subscriptionRouter)


module.exports = router