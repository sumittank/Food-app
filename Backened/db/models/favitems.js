const mongoose = require('mongoose')

const topItemsSchema = new mongoose.Schema({
    CategoryName : String,
    name : String,
    description : String,
    img : String


})

module.exports = mongoose.model('topitems',topItemsSchema)