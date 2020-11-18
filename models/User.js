const mongoose = require('mongoose')//몽구스 모듈 가져오기

const userSchema = mongoose.Schema({
    name:{
        type: String,
        maxlength : 50
    },
    email:{
        type: String,
        trim: true, // 공백제거
        unique : 1 // 중복금지


    },
    password:{
        type:String,
        maxlength:50
    },
    role: {
        type:Number,
        default: 0
    },
    image:String,
    token:{
        type: String,

    },
    tokenExp:{
        type:Number
    }
    
})

const User = mongoose.model('User', userSchema)
module.exports = {User} // 다른곳에서도 쓸 수 있게 ~~