const ExpensesServices = require('../services/ExpensesServices')

exports.createExpense = async (req, res) => {
  try {
    let expense = await ExpensesServices.addData(req.body, req.user._id)
    return res.status(201).json({
      success: true,
      message: 'Transaction Created',
      data: expense
    })
  } catch (e) {
    console.log(e)
    return res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: e.message
    })
  }
}