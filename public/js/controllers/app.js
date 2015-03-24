var jetbrains = angular.module("mediaPlayer", []);

jetbrains.controller("mediaController", ['$scope', '$http', function($scope, $http) {
    var URL = "http://localhost:3000";

    $scope.loadMedia = function() {
        $http.get(URL + "/library").success(function(media) {
            console.log(media);
            $scope.media = media;
        });
    };

    $scope.loadMedia();

}]);