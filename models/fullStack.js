const mongoose = require('mongoose')

const fullStackSchema = new mongoose.Schema({

  // title: {type:String, required: true},
  // image: {type:String, required: true },
  // release: {type:String, required:true}

})
const fullStack = mongoose.model('videoGames', fullStackSchema)

module.exports = fullStack
