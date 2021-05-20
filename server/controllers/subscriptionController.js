const ApiError = require('../error/ApiError')
const {Subscription, Nickname} = require('../models/models')

class SubscriptionController {

    async addSubscription(req, res, next) {
        const {id} = req.params

        try {
            const wherpost = await Subscription.findOne(
                {where: {userId: req.user.id, nicknameId: id}}
            )
            if (wherpost) {
                const des = await Subscription.destroy({
                    where: {userId: req.user.id, nicknameId: id}
                })
                return res.json(des)
            } else {
                const subscription = await Subscription.create({
                    userId: req.user.id,
                    nicknameId: id,
                    idUser: id
                })
                return res.json(subscription)
            }
        } catch (err) {
            next(ApiError.badRequest(err.message))
        }
    }

    async signedSubscription(req, res, next) {

        try {
            let signed = await Subscription.findAll({
                where: {userId: req.user.id},
                include: [{
                    model: Nickname, as: 'nickname',
                }]
            });
            return res.json(signed)
        } catch (err) {
            next(ApiError.badRequest(err.message))
        }
    }

    async randSignedSubscription(req, res, next) {
        try {
            const rand = await Nickname.findAll({
                order: Nickname.sequelize.random(),
                limit: 6
            });
            return res.json(rand)
        } catch (err) {
            next(ApiError.badRequest(err.message))
        }
    }
}


module.exports = new SubscriptionController()