const sequelize = require('../database')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const Nickname = sequelize.define('nickname', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    nick: {type: DataTypes.STRING, allowNull: true},
    avatar: {type: DataTypes.STRING, allowNull: false},
})

const Post = sequelize.define('post', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    idUser: {type: DataTypes.INTEGER, unique: false, allowNull: false},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    like: {type: DataTypes.INTEGER, defaultValue: 0},
    img: {type: DataTypes.STRING, allowNull: true},
})

const Like = sequelize.define('like', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    like: {type: DataTypes.INTEGER, allowNull: false},
})

const Subscription = sequelize.define('subscription', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    idUser: {type: DataTypes.INTEGER, unique: false, allowNull: false},
})

const Comment = sequelize.define('comment', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    comment: {type: DataTypes.STRING, allowNull: true}
})



User.hasMany(Like)
Like.belongsTo(User)

User.hasMany(Nickname)
Nickname.belongsTo(User)

User.hasMany(Comment)
Comment.belongsTo(User)

Post.hasMany(Like)
Like.belongsTo(Post)

User.hasMany(Subscription)
Subscription.belongsTo(User)

Nickname.hasMany(Post)
Post.belongsTo(Nickname)

Nickname.hasMany(Comment)
Comment.belongsTo(Nickname)

Nickname.hasMany(Subscription, {as: 'nickname'})
Subscription.belongsTo(Nickname)

Post.hasMany(Comment, {as: 'commentaries'})
Comment.belongsTo(Post)




module.exports = {
    User,
    Nickname,
    Like,
    Comment,
    Post,
    Subscription
}

