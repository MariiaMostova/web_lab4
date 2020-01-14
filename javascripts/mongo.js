const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 8000;
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({extended: true, limit: "50mb"}));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://mariia:sm72mv35@cluster0-h57dl.mongodb.net/test?retryWrites=true&w=majority";

app.listen(port, () => console.log("Listening at http://localhost:" + port));

app.get('/appeals', (req, res) => {
    MongoClient.connect(url, (err, database) => {
        database.db("lanaDelRay").collection("appeals").find({}).toArray((err, result) => {
            if (err) throw err;
            let appeals = JSON.stringify(result);
            res.end(appeals);
        });
        database.close();
    });
});

app.post('/appeals', (req, res) => {
    MongoClient.connect(url, (err, database) => {
        database.db("lanaDelRay").collection("appeals").insertOne(req.body, (error, result) => {
            if (error) throw error;
            res.end(JSON.stringify(req.body));
        });
        database.close();
    });
});

app.get('/news', (req, res) =>  {
    MongoClient.connect(url, (err, database) => {
        database.db("lanaDelRay").collection("news").find({}).toArray((err, result) => {
            if (err) throw err;
            let news = JSON.stringify(result);
            res.end(news);
        });
        database.close();
    });
});

app.post('/news', (req, res) => {
    MongoClient.connect(url, (err, database) => {
        database.db("lanaDelRay").collection("news").insertOne(req.body, (error, result) => {
            if (error) throw error;
            res.end(JSON.stringify(req.body));
        });
        database.close();
    });
});
