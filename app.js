const express = require('express')
const app = express()
const router = require('./router.js')

const PORT = 3000
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(express.static('public'))
app.set('views', 'views')
app.set('view engine', 'ejs')

app.listen(PORT)

app.use('/', router)


module.exports = app
