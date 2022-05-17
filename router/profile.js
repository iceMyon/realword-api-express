const express = require('express');
const router = express.Router()

router.get('/:username', async (req, res,next ) => {
  try {
    //处理请求
    res.send('post /profile/:username')
  }catch(err){
    next(err)
  }
})

router.post('/:username/follow', async (req, res,next ) => {
  try {
    //处理请求
    res.send('post /profile/:username/follow')
  }catch(err){
    next(err)
  }
})

router.delete('/:username/follow', async (req, res,next ) => {
  try {
    //处理请求
    res.send('post /profile/:username/follow')
  }catch(err){
    next(err)
  }
})

module.exports = router
