const mongoose = require('mongoose')

const itemsSchema = new mongoose.Schema({
    CategoryName : String,
    name : String,
    description : String,
    img : String


})

module.exports = mongoose.model('items',itemsSchema)