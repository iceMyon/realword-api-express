const mongoose = require('mongoose')
const {dbUri} = require('../config/config.default')


mongoose.connect(dbUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const db = mongoose.connection
db.on('error', function (){
  console.log('mongodb connected filled',err)
})
db.once('open',function (){
  console.log('we are connected')
})

//组织导出模型
module.exports = {
  User:mongoose.model('User',require('./user')),
  Article:mongoose.model('Article',require('./article'))
}
