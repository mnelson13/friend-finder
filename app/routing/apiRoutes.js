let friends = require("../data/friends");

module.exports = function(app) {
    
    app.get("/api/friends", function(req, res){
        return res.json(friends); 
    });

    app.post("/api/friends", function(req, res){
        let newFriend = req.body
        console.log(newFriend);

        let newScores = newFriend.scores

        let diffArray = [];

            for(i in friends){
                let totalDiff = 0;
                let oldScores = friends[i].scores
                for(i in oldScores){
                    let newNum = parseInt(newScores[i]);
                    let oldNum = parseInt(oldScores[i]);

                    let diff = Math.abs(newNum - oldNum);
                    totalDiff += diff;
                }
                diffArray.push(totalDiff);
            }
            let min = Math.min.apply(Math, diffArray);
            console.log(min)
            let matchIndex = diffArray.indexOf(min);
            console.log(matchIndex)

            let match = friends[matchIndex];
            console.log(match);

        friends.push(newFriend);
        res.json(match);
        
    });
}