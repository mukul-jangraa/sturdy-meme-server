const mongoose = require('mongoose')

exports.connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('DB connected')
  } catch (e) {
    console.log(e.message)
  }
}