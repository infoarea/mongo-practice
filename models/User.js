

const mongoose = require('mongoose');

const userSchema = mongoose.Schema ({
    name : {
        type : String,
        required : true,
        trim : true
    },
    age : {
        type : Number,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true,
        trim : true
    },
    skill : {
        type : String,
        required : true,
        trim : true
    },
    gender : {
        type : String,
        required : true,
        enum : ['Male', 'Female']
    }, 
    location : {
        type : String,
        required : true,
        enum : ['Mirpur', 'Jatrabari', 'Uttara', 'Gulshan']
    },
    foods : {
        type : Array
    },
    isPassed : {
        type :Boolean,
        default :true
    }
},
{
    timestamps : true
});



module.exports = mongoose.model('User', userSchema )