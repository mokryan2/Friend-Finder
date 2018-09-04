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
        var totalDiff = 10000;

        for (var i = 0; i < friendData.length; i++) {
            var diff = 0;
            for (var j = 0; j < userResponse.length; j++) {
                diff += Math.abs(friendData[i].scores[j] - userResponse[j]);
            }
            if (diff < totalDiff) {
                totalDiff = diff;
                matchName = friendData.name;
                matchImg = friendData.photo;
            }
        }

        friendData.push(req.body);
        res.json({ status: `OK`, matchName: matchName, matchImg: matchImg });
    })
};