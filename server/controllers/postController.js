const ApiError = require('../error/ApiError')
const uuid = require('uuid')
const path = require('path')
const {Post, Comment, Nickname, Like, Subscription} = require('../models/models')
const { Op } = require("sequelize");

class PostController {


    async create(req, res, next) {
        try {
            let {name, commentaries} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const post = await Post.create({idUser: req.user.id, name, img: fileName, nicknameId: req.user.id})

            if (commentaries) {
                commentaries = JSON.parse(commentaries)
                commentaries.forEach(i =>
                    Comment.create({
                        comment: i.comment,
                        postId: post.id,
                    })
                )
            }
            return res.json(post)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }


    async addLike(req, res, next) {
        const {id} = req.params
        try {
            const wherpost = await Like.findOne(
                {where: {userId: req.user.id, postId: id}}
            )
            if (wherpost) {
                await Like.destroy({
                    where: {userId: req.user.id, postId: id}
                })
                const dec = Post.decrement({like: 1}, {where: {id: id}})

                const likestatus = await Like.findAll({
                    where: {postId: id},
                    attributes: ['like'],
                })
                return res.json(likestatus)

            } else {
                const likes = await Like.create({userId: req.user.id, postId: id, like: req.user.id})
                const inc = Post.increment({like: 1}, {where: {id: id}})

                const likestatus = await Like.findAll({
                    where: {postId: id},
                    attributes: ['like'],
                })

                return res.json(likestatus)
            }
        } catch (err) {
            next(ApiError.badRequest(err.message))
        }
    }

    async verifiLike(req, res) {
        const {id} = req.params
        const check = await Like.findOne(
            {
                where: {userId: req.user.id, postId: id},
            }
        )
        if(check){
            return res.json(true)
        }
        return res.json(false)
    }


    async addComment(req, res, next) {
        const {id} = req.params
        let {comment} = req.body
        const addComment = await Comment.create({comment: comment, userId: req.user.id, nicknameId: req.user.id, postId: id})

            const postPost = await Comment.findAll(
                {
                    where: {postId: id},
                    include: {model: Nickname}
                })
            return res.json(postPost)

    }


    async getAll(req, res) {
        let {page, limit} = req.query
        page = page || 1
        limit = limit || 100
        let offset = page * limit - limit

        const subscriptions = await Subscription.findAll(
            {

                where:{userId: req.user.id},
                    attributes: ['idUser'],
            },
    )

        let te = JSON.parse(JSON.stringify(subscriptions));


        console.log(te)

        const posts = await Post.findAndCountAll(
            {
                where: {
                    [Op.or]: te
                },
                    include: [
                    {
                        model: Like,
                        attributes: ['like'],
                    },
                    {
                    model: Comment, as: 'commentaries',
                    include: {model: Nickname},
                    },
                    {model: Nickname}

                    ],

                limit, offset,
                order: [['updatedAt', 'DESC']],
            }
        )



        return res.json(posts)
    }

    async getOne(req, res) {
        const {id} = req.params
        const post = await Post.findOne(
            {
                where: {id},
                include: [{
                    model: Comment, as: 'commentaries',
                    order: [['updatedAt', 'DESC']],
                     include: {model: Nickname},
                },
                    {model: Nickname}]
            }
        )
        return res.json(post)
    }




    async getFilter(req, res) {
        const {idUser} = req.params
        let {page, limit} = req.query
        page = page || 1
        limit = limit || 100
        let offset = page * limit - limit
        const postImage = await Post.findAndCountAll(
            {

                where: {idUser},
                    include: [
                        {
                            model: Like,
                            attributes: ['like'],
                        },
                        {
                            model: Comment, as: 'commentaries',
                            include: {model: Nickname},
                        }],
                limit, offset,
                order: [['updatedAt', 'DESC']]
            },
        )
        return res.json(postImage)
    }


    async getDelete(req, res) {
    }
}



module.exports = new PostController()