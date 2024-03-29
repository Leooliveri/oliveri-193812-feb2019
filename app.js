const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const list = require('./list');

app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( { extended: true } ) );

app.get('/numbers', function (req, res) {
    var result = list( req.query.x, req.query.y )
    /*console.log(req.query.x)
    console.log(req.query.y)*/
    res.status(200).send( { result: result } )
})

module.exports = app;