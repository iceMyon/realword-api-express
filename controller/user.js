const {User} = require('../model')
//用户登录
exports.login = async (req, res, next) => {
  try {
    res.send('post /users/login')
  } catch (err) {
    next(err)
  }
}
//用户注册
exports.register = async (req, res, next) => {
  try {
    let user = new User(req.body.user)
    await user.save()
    user = user.toJSON()
    delete user.password
    res.status(201).json({
      user
    })
  } catch (err) {
    next(err)
  }
}
//获取当前用户信息
exports.getCurrentUser = async (req, res, next) => {
  try {
    res.send('getCurrentUser')
  } catch (err) {
    next(err)
  }
}
//更新当前登录用户
exports.updateCurrentUser = async (req, res, next) => {
  try {
    res.send('updateCurrentUser')
  } catch (err) {
    next(err)
  }
}
