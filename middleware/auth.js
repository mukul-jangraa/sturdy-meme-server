const JWT = require('jsonwebtoken')
const UserServices = require('../services/UserServices')

const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]
    const decoded = JWT.verify(token, 'SecretKey' ,async (err, data) => {
      if (err) {
        return res.status(401).json({
          message: 'Invalid Token',
          success: false
        })
      } else {
        const user = await UserServices.getData({_id: decoded._id},["first_name email mobile"])
        if(user.length > 0) {
          req.user = user[0]
          next()
        } else {
          return res.status(404).json({
            message: 'User not found',
            success: false
          })
        }
      }
    })
    
    

    
  } catch (e) {
    return res.status(500).json({
      message: 'server error',
      error: e.message,
      success: false
    })
  }
} 

module.exports = verifyToken