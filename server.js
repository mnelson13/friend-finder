let express = require("express");
let bodyParser = require("body-parser");
let path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, './app/public')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


let apiRoutes = require("./app/routing/apiRoutes.js")

apiRoutes(app);

let htmlRoutes = require("./app/routing/htmlRoutes.js")

htmlRoutes(app);
 


app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
})