const Expenses = require('../model/Expenses')

exports.addData = async (formData, userId) => {
  try {
    let data  = new Expenses ({
      userId: userId,
      amount: formData.amount,
      expenseType: formData.expenseType,
      description: formData.description
    });

    await data.save()
    return data
  } catch (e) {
    throw Error(e)
  }
}

