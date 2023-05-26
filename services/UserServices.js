const User = require("../model/User");
const bcrypt = require('bcrypt')
exports.addData = async (formData) => {
  try {
    const hashPassword = await bcrypt.hash(formData.password, 10)
      let data = new User({
        first_name: formData.first_name,
      last_name: formData.last_name,
      email: formData.email,
      mobile: formData.mobile,
      profile_picture: formData.profile_picture,
      password: hashPassword
    });

    await data.save()
    return data
  } catch (e) {
    console.log(e.message);
    throw Error(e)
  }
};

exports.getData = async (filter, select = [], sort = {_id: -1}, skip = 0, limit = 1) => {
  try {
    let data = await User.find(filter).select(select).sort(sort).skip(skip).limit(limit).lean()
    return data
  } catch (e) {
    throw Error (e) 

  }
}


