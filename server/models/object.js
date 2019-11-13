const mongoose = require("mongoose")
    ObjectSchema = new mongoose.Schema({
        name: {type:String, required:true, minlength: 3},
    }, {timestamps:true});

    mongoose.model("Object", ObjectSchema)