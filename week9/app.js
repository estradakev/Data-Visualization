"use strict";

const express = require('express');
const app = express();


app.get('/math/circle/', function(req, res){
    const area = [{
        area : 3.14,
        circumference: 6.28
    }];
    res.json(area);
});

app.get('/name/:firstName/:lastName', function (req, res) {
    req.params = {firstName : "kevin", lastName : "estrada"};
    res.type("text");
    res.send("OK\nFirst name= " + req.params.firstName + "\nlast name= " + req.params.lastName);
});



app.use(express.static('public'));
const PORT = process.env.PORT || 4000;
app.listen(PORT);