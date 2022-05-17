const crypto = require('crypto');

//获取crypto支持的散列算法



module.exports = str =>{
  return crypto.createHash('md5')
    .update('lagou'+ str)
    .digest('hex')
}
