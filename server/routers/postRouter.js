const  Router = require('express')
const router = new Router()
const postController = require('../controllers/postController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/',checkRole(process.env.DEFAULTROLLE) ,postController.create)
router.post('/comment/:id',checkRole(process.env.DEFAULTROLLE), postController.addComment)

router.put('/like/:id', checkRole(process.env.DEFAULTROLLE) ,postController.addLike)
router.get('/checklike/:id',checkRole(process.env.DEFAULTROLLE), postController.verifiLike)

router.get('/',checkRole(process.env.DEFAULTROLLE) ,postController.getAll)
router.get('/:id',postController.getOne)

router.get('/user/:idUser',postController.getFilter)



module.exports = router
