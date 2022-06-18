const express = require("express");

const app = express();

const PORT = 3000;

const friends = [{ id: 0, name: "John" }, { id: 1, name: "John" }, { id: 2, name: "John" }]

app.use((req, res, next) => {
    const start = Date.now();
    next();
    const end = Date.now() - start
    console.log(`${req.method} ${req.url} ${end}ms`)
})

app.get("/", (req, res) => {
    res.send("Hello, world!");
});

app.get("/friends", (req, res) => {
    res.json(friends);
});

app.get("/friends/:friendId", (req, res) => {
    const friendId = Number(req.params.friendId)
    const friend = friends[friendId]
    if (friend) {
        res.status(200).json(friend);
    } else {
        res.status(404).json({
            error: 'Friend not found'
        })
    }
});

app.listen(PORT, () => {
    console.log("listening on port " + PORT);
});