const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validator(value){
            if(!validator.isEmail(value)){
                throw Error('invalid Email')
            }
        }
    },
    age:{
        type:Number,
        required:true
    }
})


const users=new mongoose.model('users',userSchema)

module.exports=users