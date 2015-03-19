/**
 * Created by daradermody on 16/03/15.
 */

var express = require("express");
var app = express();
var fs = require("fs");
var cors = require("cors"); // Module for cross-origin resource sharing

app.use(cors());

var path = "/Users/daradermody/Movies/";
path = "../public/movies";

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
    fs.readdir(path, function(err, files) {
        res.send(getFiles(files));
    });
});

app.listen(3000);