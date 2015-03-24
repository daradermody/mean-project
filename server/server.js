/**
 * Created by daradermody on 16/03/15.
 */

var express = require("express");
var app = express();
var fs = require("fs");
var cors = require("cors"); // Module for cross-origin resource sharing
var http = require('http');
var path = require('path');

app.use(cors());

var mediaPath = "public/movies";

var getFiles = function(files) {
    if(files){
        var fileList = files.filter(function (filename) {
            return filename.match(/^[^\.].*\.mp4/);
        }).map(function (file) {
            return "movies/" + file;
        });
        console.log(fileList);
        return fileList;
    } else {
        return "[]";
    }
};

app.get("/library", function (req, res) {
    fs.readdir(mediaPath, function(err, files) {
        res.send(getFiles(files));
    });
});


app.use(function(req, res, next) {
    console.log(req.protocol + '://' + req.get('host') + req.originalUrl);
    next();
});
app.use(express.static(path.resolve('./public')));

app.listen(3000);