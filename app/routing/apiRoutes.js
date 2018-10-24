app.get("/api/friends", function(req, res){
    return res.json(friends);
});

app.post("/api/friends", function(req, res){
    let newFriend = req.body
    console.log(newFriend);

    let newScores = newFriend.scores

    app.get("/api/friends", function(req, res){
        let diffArray = [];
        for(i in res){
            let totalDiff = 0;
            let oldScores = res[i].scores
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
    });

    friends.push(newFriend);
    res.json(newFriend);
    
})