const  Router = require('express')
const router = new Router()
const subscriptionController = require('../controllers/subscriptionController')
const checkRole = require('../middleware/checkRoleMiddleware')


router.post('/:id', checkRole(process.env.DEFAULTROLLE), subscriptionController.addSubscription)


router.get('/signed', checkRole(process.env.DEFAULTROLLE), subscriptionController.signedSubscription)
router.get('/randsigned', checkRole(process.env.DEFAULTROLLE), subscriptionController.randSignedSubscription)






module.exports = router