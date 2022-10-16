const router = require('express').Router()
const user = require('../auth/controller/authController.js')
const auth = require("../middleware/auth")

router.post('/', user.register)

router.post('/login', user.login)

router.get("/", auth, user.all)

module.exports = router