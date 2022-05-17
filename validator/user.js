const validator = require('../middleware/validator')
const {body, validationResult} = require('express-validator')
const {User} = require('../model')
const md5 = require('../util/md5')

exports.register = validator([
  body('user.username').notEmpty().withMessage('用户名不能为空')
    .notEmpty().withMessage('用户名不能为空')
    .bail()
    .custom(async username => {
      const user = await User.findOne({username})
      if (user) {
        return Promise.reject('用户名已存在')
      }
    }),
  body('user.password').notEmpty().withMessage('密码不能为空'),
  body('user.email')
    .notEmpty().withMessage('邮箱不能为空')
    .isEmail().withMessage('邮箱格式不正确')
    .bail()
    .custom(async email => {
      const user = await User.findOne({email})
      if (user) {
        return Promise.reject('邮箱已存在')
      }
    })
])

exports.login = [
  validator([
    body('user.email').notEmpty().withMessage('邮箱不能为空'),
    body('user.password').notEmpty().withMessage('密码不能为空')
  ]),
  validator([
    body('user.email').custom(async (email,{req}) => {
      const user = await User.findOne({email})
        .select(['email','username','bio','image','password'])
      if(!user){
        return Promise.reject('用户不存在')
      }
      console.log(user)
      req.user = user
    })
  ]),
  validator([
    body('user.password').custom(async (password,{req}) =>{
      console.log(password,req.user.password)
      if(md5(password) !== req.user.password){
        return Promise.reject('密码错误')
      }
    })
  ])
]


