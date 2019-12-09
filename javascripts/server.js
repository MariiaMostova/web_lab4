let express = require('express');
let app = express();
let bodyParser = require('body-parser');
const port = 8000;
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({extended: true, limit: "50mb"}));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
appeals = [];
news = [];

app.listen(port, () => console.log("Listening at http://localhost:" + port));

app.get('/appeals', function (req, res) {
    res.end(JSON.stringify(appeals));
});

app.post('/appeals', function (req, res) {
    appeals.push(req.body);
    res.end(JSON.stringify(appeals));
});

app.get('/news', function (req, res) {
    res.end(JSON.stringify(news));
});

app.post('/news', function (req, res) {
    news.push(req.body);
    res.end(JSON.stringify(news));
});
