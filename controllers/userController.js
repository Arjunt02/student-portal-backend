const users=require('../models/userSchema')

exports.addUser=async(req,res)=>{
    req.file
    const {name,email,age}=req.body

    try{
        const preuser=await users.findOne({email})

        if(preuser){
            res.status(406).json("user already exist")
        }else{
            const newUser=new users({
                name,email,age
            })
            await newUser.save()
            res.status(200).json(newUser)
        }

    }catch(err){
        res.status(401).json("Error"+err)
    }

    console.log("inside add user");
}



exports.getallUsers=async(req,res)=>{
    try{
        const allusers=await users.find({})
        res.status(200).json(allusers)
    }
    catch(err){
        res.status(401).json(err)
    }
}


exports.deleteUser=async(req,res)=>{
    const {id}=req.params
    try {
        removeData=await users.findByIdAndDelete({_id:id})
        res.status(200).json(removeData)
    } catch (err) {
        res.status(401).json(err)
    }
}


exports.editUser=async(req,res)=>{
    const {id}=req.params
    const {name,email,age}=req.body

    try {
        const updateUser=await users.findByIdAndUpdate({_id:id},{name,email,age},{new:true})
        await updateUser.save()
        res.status(200).json(updateUser)
    } catch (err) {
        res.status(401).json(err) 
    }
}