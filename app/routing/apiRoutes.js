var friendData = require("../data/friends.js");

module.exports = (app) => {
    app.get("/api/friends", (req, res) => {
        return res.json(friendData)
    });

    app.post("/api/friends", (req, res) => {
        var user
     })
};