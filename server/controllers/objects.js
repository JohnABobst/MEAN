const mongoose = require("mongoose")

const Object = mongoose.model("Object")

module.exports = {
    objects: function (request,response) {
        Object.find()
            .then(data=> response.json(data))
            .catch(error => response.json(error))
    },
    detail: function (request,response) {
        Object.findOne({_id:request.params.id})
            .then(data=> response.json(data))
            .catch(error=> response.json(error))
    },
    create: function (request,response) {
       
        Object.create(request.body)
            .then(data=> response.json(data))
            .catch(error => response.json(error))
    },
    put: function(request,response) {
        let opts = { runValidators:true}
        Object.findByIdAndUpdate(
            request.params.id,
            request.body,
            opts, function(error){
                return error
            },
            {new:true}
        )
            .then(data=> response.json(data))
            .catch(error => response.json(error))
    },
    delete: function(request,response){
        Object.deleteOne({_id:request.params.id})
            .then(data=> response.json(data))
            .catch(error => response.json(error))
    },
    review: function(request,response){
       
        Review.create(request.body)
            .then(data=> {
                Object.findOneAndUpdate(
                    {_id:request.params.id}, 
                    {$push: {reviews:data}}, 
                    {new:true}, 
                    function(error,data){
                        if(error){
                            return response.json(error)
                        }
                        else{
                            return response.json(data)
                        }
                })
            })
            .catch(error => response.json(error))
    }
}