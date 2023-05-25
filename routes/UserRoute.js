const UserController = require('../controller/UserController')
const express = require('express')

const router = express.Router()

router.post('/signup', UserController.createProfile)

module.exports = router