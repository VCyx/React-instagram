const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const uuid = require('uuid')
const path = require('path')
const {User, Nickname, Subscription} = require('../models/models')

const genetateJWT = (id, email, role) => {

    return jwt.sign({id, email, role},
        process.env.SECRET_KEY
    )
}

class UserController {
    async registration(req, res) {
        let {email, password, role, nickname} = req.body
        if (!email || !password) {
            return next(ApiError.badRequest('Некоректний email чи пароль'))
        }
        const registerUser = await User.findOne({where: {email}})
        if (registerUser) {
            return next(ApiError.badRequest('Користувач незнайдений'))
        }
        if (!nickname) {
            return next(ApiError.badRequest('Не заданий Нік користувача'))
        }
        const hashPassword = await bcrypt.hash(password, 4)

        const user = await User.create({email, role: "SUPERUSER", password: hashPassword})

        let fileName = 'NoAvatar.png'

        if (req.files) {
            const {avatar} = req.files
            fileName = uuid.v4() + ".jpg"
            avatar.mv(path.resolve(__dirname, '..', 'static/ava-user', fileName))
        }
        user.createNickname({nick: nickname, avatar: fileName})

        const tokens = genetateJWT(user.id, user.email, user.role)
        return res.json({tokens})


    }


    async login(req, res, next) {
        const {email, password} = req.body

        const user = await User.findOne({where: {email}})
        if (!user) {
            return next(ApiError.badRequest('Користувач відсутній в системі'));
        }
        let comparePassowr = bcrypt.compareSync(password, user.password)
        if (!comparePassowr) {
            return next(ApiError.badRequest('Невірний пароль'));
        }
        const tokents = genetateJWT(user.id, user.email, user.role)
        return res.json({tokents})
    }

    async check(req, res, next) {
        //     const {id} = req.query
        //     if (!id){
        //        return  next(ApiError.badRequest('не задан ид'))
        //     }
        //     res.json(id)

        const tokens = genetateJWT(req.user.id, req.user.email, req.user.role)
        return res.json({tokens})
    }


    async getAll(req, res) {
        let {page, limit} = req.query
        page = page || 1
        limit = limit || 50
        let offset = page * limit - limit
        const nickname = await Nickname.findAndCountAll(
            {limit, offset}
        )
        return res.json(nickname)
    }


    async getOne(req, res) {
        const {id} = req.params
        const nickname = await Nickname.findOne(
            {
                where: {userId: id},
            },
        )
        return res.json(nickname)
    }

    async getMainUser(req, res) {
        const main = await Nickname.findOne(
            {
                where: {userId: req.user.id},
                attributes: ['nick', 'avatar', 'userId'],
            }
        )
        return res.json(main)
    }
}

module.exports = new UserController()