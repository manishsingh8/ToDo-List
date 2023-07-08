const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    }
});


// compilling our schema into a model
const ItemList = mongoose.model('ItemList',listSchema);

module.exports = ItemList;