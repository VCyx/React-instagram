require('dotenv').config()

const express = require('express')
const sequelize = require('./database')
const router = require('./routers/index')
const path = require('path')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const _PORT = process.env.PORT || 7000
const app = express(),
    start = async () => {
        try {
            await sequelize.authenticate()
            await sequelize.sync()
            app.listen(
                _PORT,
                () => console.log(`Server start PORT: ${_PORT}`)
            )
        } catch (e) {
            console.log(e)
        }
    }
start()

app.use(cors({origin: true, credential: true}));
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)

app.use(errorHandler)