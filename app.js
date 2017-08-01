const express = require("express")
const mustache = require("mustache-express")
const bodyParser = require("body-parser")
const app = express()
const mongoose = require('mongoose')
const fs = require('fs')
const FPG = require('fake-product-generator')
const rs = FPG(500) // creates 500 products!
const ws = fs.createWriteStream('./data.json')
const fullStack = require('./models/fullStack')
rs.pipe(ws)


const Home = require ('./routes/home')
app.use(Home)


mongoose.Promise = require('bluebird')
mongoose.connect('mongodb://localhost:27017/fullStack')

app.engine('mustache', mustache());
app.set("view engine", 'mustache');
app.set("layout", 'layout');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: false}));


app.listen(3000, function(){
  console.log("everything looks good!")
})

 // let stack = new fullStack({
 //    part_number: '',
 //    name: '',
 //    description: '',
 //    price:,
 //    image:
 //  })
 //  game.save().then(function(req, res){
 //    console.log('game has been saved')
 //  }).catch(function(err){
 //    console.log('There was an error!')
 //  })
