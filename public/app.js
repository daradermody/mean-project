var jetbrains = angular.module("mediaPlayer", []);

jetbrains.controller("mediaController", function($http) {
    var app = this;
    var URL = "http://localhost:3000";
    app.media = ["testing"];

    this.loadMedia = function() {
        $http.get(URL + "/library").success(function(media) {
            console.log(media);
            app.media = media
        })
    };

    app.loadMedia();

});