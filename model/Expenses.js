const mongoose = require('mongoose')
const ExpensesSchema = mongoose.Schema({
  userId: {type: mongoose.Types.ObjectId, ref: 'User' ,required: true},
  amount: {type: Number, default: 0},
  expenseType: {type:String, enum:['Spent', 'Received'] },
  description: {type: String}
}, { timestamps: true})

module.exports = mongoose.model('Expenses', ExpensesSchema)