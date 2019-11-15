const objects = require("../controllers/objects")
const path = require('path')
module.exports = function(app) {
    app.get("/api/objects", (request,response) => {
        objects.objects(request,response)
    });
    app.get("/api/object/:id", (request,response) => {
        objects.detail(request,response)
    });
    app.post("/api/objects", (request,response)=>{
        objects.create(request,response)
    });
    app.delete("/api/objects/:id", (request,response) =>{
        objects.delete(request,response)
    })
    app.put("/api/objects/:id", (request,response) =>{
        objects.put(request,response)
    })
    app.post("/api/review/:id", (request,response) => {
        objects.review(request,response)
    })
    app.all("*", (request, response, next) => {
        response.sendFile(path.resolve("./public/dist/public/index.html"))
    }); 
}