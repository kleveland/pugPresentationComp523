const express = require('express');
const app = express();
const fs = require('fs');

app.set('view engine', 'pug');


var contents = fs.readFileSync("2017.json");
var jsonContent = JSON.parse(contents);

app.get('/', (req, res) => {
    console.log(jsonContent)
    res.render("example", { title: "Example Pug", tweets: jsonContent });
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));