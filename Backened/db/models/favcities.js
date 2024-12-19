const mongoose = require('mongoose')

const topCitiesSchema = new mongoose.Schema({
    CategoryName : String,
    name : String,
    description : String,
    img : String


})

module.exports = mongoose.model('topcities',topCitiesSchema)