

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
        enum : ['Mirpur', 'Jatrabari', 'Uttara', 'Gulshan'],
    },
    foods : {
        type : [mongoose.Schema.Types.ObjectId],
        ref : "Food"
    },
    Movies : {
        type : [mongoose.Schema.Types.ObjectId],
        ref : "Movie"
    },
    isPassed : {
        type :Boolean,
        default :true
    }
},
{
    timestamps : true
});

//Static function 
userSchema.statics.findByGender =  function(gender = 'Male'){

    return this.find().where('gender').eq(gender)

}

//Gender query function
userSchema.query.gneder = function (gn = 'Male') {
    return this.where('gender').eq(gn)
}

//Location Query function 
userSchema.query.location = function (thikana = 'Jatrabari') {
    return this.where('location').eq(thikana)
}
//Age query function 
userSchema.query.boyosh = function (yourAge = 50) {
    return this.where('age').gte(yourAge)
}

//Create Methods
userSchema.methods.ispaid = function () {
    if (this.isPassed == true ) {
        return `${this.name} passh korse,,, Welcome`
        
    } else {
        return `${this.name} fell korse, Very bad`
    }
}

//Create virtual
userSchema.virtual('welcome').get( function() {
    return `Amader world a ${this.name} welcome`
});

userSchema.pre('save', function( next ) {
    this.isPassed = false
        next();
    
        
});

module.exports = mongoose.model('User', userSchema )