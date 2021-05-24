const  Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')
const checkRole = require('../middleware/checkRoleMiddleware')


router.post('/registration',userController.registration)
router.post('/login',userController.login)
router.get('/auth',authMiddleware, userController.check)
router.get('/all',userController.getAll)

router.get('/owner',checkRole(process.env.DEFAULTROLLE) ,userController.getMainUser)


router.get('/:id',userController.getOne)


module.exports = router