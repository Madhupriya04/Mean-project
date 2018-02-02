// 

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({ 
    name:{
        type:String,
        // index: {unique: true, dropDups: true},
        required : [true, 'Name is required']
    },
    password:{
        type:String,
        // index: {unique: true, dropDups: true},
        required : [true, 'password is required']
    },
    age:{
        type:Number,
        // index: {unique: true, dropDups: true},
        required : [true, 'Age is required']
    }
});   

// UserSchema.index({'$**':'text'});
const User = mongoose.model('user', UserSchema);

exports = module.exports = User;


// module.exports = mongoose.model('User', UserSchema);