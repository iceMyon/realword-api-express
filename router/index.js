const express = require('express');
const router = express.Router()

router.use(require('./user'))
//用户相关路由
router.use('/profile',require('./profile'))

module.exports = router
