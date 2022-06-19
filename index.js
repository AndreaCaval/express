const express = require("express");
const path = require("path");

const friendsRouter = require("./routes/friends.routes");
const messagesRouter = require("./routes/messages.routes");

const app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

const PORT = 3000;

app.use((req, res, next) => {
    const start = Date.now();
    next();
    const end = Date.now() - start
    console.log(`${req.method} ${req.baseUrl}${req.url} ${end}ms`)
})

app.use('/site', express.static(path.join(__dirname, 'public')));

app.use(express.json())

app.get('/', (req, res) => {
    res.render('index', {title:'Express', caption:'Hello world'})
 }
)

app.use('/friends', friendsRouter)
app.use('/messages', messagesRouter)



app.get("/", (req, res) => {
    res.send("Hello, world!");
});

app.listen(PORT, () => {
    console.log("listening on port " + PORT);
});