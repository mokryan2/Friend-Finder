var friendData = require("../data/friends.js");

module.exports = (app) => {
    app.get("/api/friends", (req, res) => {
        return res.json(friendData)
    });

    app.post("/api/friends", (req, res) => {
        var userInput = req.body;
        var userResponse = userInput.scores;
        var matchName = "";
        var matchImg = "";
        var totalDifference = 10000;

        for (i in friendData) {
            var diff = 0;
            for (j in userResponse) {
                diff += Math.abs(friendData[i].scores[j] - userResponse[j]);
            }
            if (diff < totalDifference) {
                totalDifference = diff;
                matchName = friendData[i].name;
                matchImg = friendData[i].photo;
            }
        }

        friendData.push(req.body);
        res.json({ 
            status: `OK`, 
            matchName: matchName, 
            matchImg: matchImg });
    })
};