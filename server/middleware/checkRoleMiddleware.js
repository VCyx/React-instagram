const jwt = require('jsonwebtoken')
module.exports = function (role) {
    return function (req, res, next){
        if (req.method === "OPTIONS") {
        next()
            }
    try {
        const token = req.headers.authorization.split(' ')[1]
        if (!token) {
           return  res.status(401).json({message: "Не авторизований"})
        }
        const decod = jwt.verify(token, process.env.SECRET_KEY)
        if(decod.role !== role) {
          return   res.status(403).json({message: "Не авторизован нема доступу "})
        }

        req.user = decod

        next()
    } catch (e) {
        res.status(401).json({message: "Не авторизований"})
    }
};
}

