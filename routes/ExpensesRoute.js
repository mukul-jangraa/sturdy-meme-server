const ExpensesController = require('../controller/ExpensesController')
const verifyToken = require('../middleware/auth')
const express = require('express')

const router = express.Router()

router.post('/create-expense', verifyToken ,ExpensesController.createExpense)

module.exports = router