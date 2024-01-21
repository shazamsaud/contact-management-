const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    username:{
        type : String,
        required:[true,"enter username"]
    },
    email:{
        type : String,
        required:[true,"enter email"],
        unique : [true, "already exist"]
    },
    password:{
        type : String,
        required:[true,"enter phone"]
    },

},{
    timestamps: true,
});

module.exports = mongoose.model("User",userSchema);