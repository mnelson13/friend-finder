let express = require("express");
let bodyParser = require("body-parser");
let path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());







// app.get("/api/friends", function(req, res){
//     return res.json(friends);
// });

// app.post("/api/friends", function(req, res){
//     let newFriend = req.body
//     console.log(newFriend);

//     let newScores = newFriend.scores

//     app.get("/api/friends", function(req, res){
//         let diffArray = [];
//         for(i in res){
//             let totalDiff = 0;
//             let oldScores = res[i].scores
//             for(i in oldScores){
//                 let newNum = parseInt(newScores[i]);
//                 let oldNum = parseInt(oldScores[i]);

//                 let diff = Math.abs(newNum - oldNum);
//                 totalDiff += diff;
//             }
//             diffArray.push(totalDiff);
//         }
//         let min = Math.min.apply(Math, diffArray);
//         console.log(min)
//         console.log("Hello");
//     });

//     // friends.push(newFriend);
//     res.json(newFriend);
    
// })

// app.get("/survey", function(req, res){
//     res.sendFile(path.join(__dirname, "/app/public/survey.html"))
// });

// app.get("/", function(req,res){
//     res.sendFile(path.join(__dirname, "/app/public/home.html"))
// });








app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
})