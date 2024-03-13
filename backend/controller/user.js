let User=require('../models/user');
let profileImage=require("../models/profile");
let multer=require('multer');
let path=require('path');

const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'public/uploads')
    },
    filename: function (req, file, cb) {
        cb(null,Date.now()+path.extname(file.originalname));
        }
}); 

//miidleware
const upload=multer({storage:storage});

const createUser=async(req,res)=>{
    try {
        const body=req.body;
        console.log(body)
        let user=await User.create(body);
        console.log(user)

    } catch (error) {
        res.status(409).json({message:"user is not created"});
    }
}
const createImage=async(req,res)=>{
    try {
        let user=await user.findById(req.params.userId);
        if(!user){
        const body=req.file;
        const files=body.map(file=>({
            user:user._id,
            filename:body.filename,
            path:file.path
        }));
        const savedFiles=await profileImage.create(files)
        
        res.status(200).json({message:"image uploaded",data:savedFiles});
    }

    } catch (error) {
        res.status(409).json({message:"user is not created"});
    }
}
module.exports={
    createImage:upload.array('photo',40),
    createUser
}