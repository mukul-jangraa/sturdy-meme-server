const UserServices = require('../services/UserServices')
const bcrypt = require('bcrypt')
const JWT = require('jsonwebtoken')

exports.createProfile = async (req, res) => {
  try {
    let isExists = await UserServices.getData({email: req.body.email})
    if(isExists.length) {
      return res.status(409).json({
        success: false,
        message: 'Email Already Registered',
      })
    }
    let user = await UserServices.addData(req.body)
    let token = JWT.sign({_id: user._id}, 'SecretKey', {
      expiresIn: '7d'
    })
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

exports.login = async (req, res) => {
  try {
    let user = await UserServices.getData({email: req.body.email})
    if(user.length) {
      user = user[0];
      let passwordMatched = await bcrypt.compare(req.body.password , user.password)
      if(passwordMatched) {
        let token = JWT.sign({_id: user._id}, 'SecretKey', {
          expiresIn: '10s'
        })
        return res.status(201).json({
          success: true,
          data: user,
          message: 'Login Successfully',
          token: token
        })
      } 
      return res.status(401).json({
        success: false,
        message: 'Password Incorrect',
        error: e.message
      })
    }else {
      return res.status(404).json({
        success: false,
        message: 'email not registered',
        error: e.message
      })
    }
  } catch (e) {
    console.log(e.message)
    return res.status(500).json({
      success: false,
      message: 'Server Error',
      error: e.message
    })
  }
}