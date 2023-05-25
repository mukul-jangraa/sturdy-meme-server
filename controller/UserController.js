const UserServices = require('../services/UserServices')
const JWT = require('jsonwebtoken')

exports.createProfile = async (req, res) => {
  try {
    let user = await UserServices.addData(req.body)
    let token = JWT.sign({_id: user._id}, 'SecretKey')
    return res.status(201).json({
      success: true,
      data: user,
      message: 'User Created Successfully',
      token: token
    })
  } catch (e) {
    console.log(e.message)
    return res.status(500).json({
      success: false,
      message: 'Server Error',
      error: e.message
    })
  }
}