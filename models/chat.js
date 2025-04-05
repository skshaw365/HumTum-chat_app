const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    from:{
        type:String,
        require:true
    },
    to:{
        type:String,
        require:true
    },
    msg:{
        type:String,
        require:true
    },
    created_at:{
        type:Date,
        require:true
    },
});

const chat=mongoose.model("chat",userSchema)

module.exports=chat;