const mongoose = require("mongoose")
    ObjectSchema = new mongoose.Schema({
        name: {type:String, required:[true, "You must provide a product name"], minlength: [3, "Name must be longer than 3 characters"], unique: [true, "That restaurant has already been added"]},
        quantity: {type:Number, required:[true, "You must provide a product quantity"], min :[0, "Quantity must be greater than 0"]},
        price: {type: Number, required:[true, "You must provide price"], min:[0, "Price must be greater than 0"]}
    }, {timestamps:true});

    mongoose.model("Object", ObjectSchema)
    