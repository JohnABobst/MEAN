const express = require("express")
const mongoose = require("./server/config/mongoose.js")
const bodyParser = require('body-parser')

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/public/dist/public"));
require("./server/config/routes.js")(app)
app.listen(8000, () => console.log("Listening on port 8000"))
