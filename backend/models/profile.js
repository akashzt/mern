const mongoose=require('mongoose');
const imageSchema=mongoose.Schema({
    User:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    filename:String,
    path:String,
    uploadDate:{type: Date,default: Date.now()}
});
module.exports =mongoose.model("Image",imageSchema);  