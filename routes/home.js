const express = require('express')
const app = express()
const router = express.Router()
const fullStack = require('../models/fullStack')





router.get('/', function (req, res){
  fullStack.find()
  .then(function(stack){
    return res.status(200).json({
      status: 'success',
      data: {
        stack: stack
      }
    })
  })
})

// router.get('/', function(req, res){
//   fullStack.find()
//   .then(function(fullStack){
//     res.render('home', {
//       fullStack: fullStack
//     })
//   })
// })


module.exports = router
