

const mongoose = require('mongoose');

const foodSchema = mongoose.Schema ({
    name : {
        type : String,
        required : true,
        trim : true
    },
    price : {
        type : Number,
        required : true,
        trim : true
    }
},
{
    timestamps : true
});



module.exports = mongoose.model('Food', foodSchema )