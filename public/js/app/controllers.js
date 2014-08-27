'use strict';

var controllers = angular.module('drubble.controllers', []);

controllers.controller('ShotsListController', function ($http, $scope, $routeParams, drubble) {
    var list = $routeParams.list;

    drubble.shots(list, {cache: true}).then(function (data) {
        $scope.lists = data;
    });
});

controllers.controller('ShotController', function ($routeParams, $scope, $http, drubble) {

    var shotId = $routeParams.id;

    drubble.shot(shotId, {cache: true}).then(function (data) {
        $scope.shot = data.data;

        drubble.shotsByPlayerId(data.data.player.id, {per_page: 5}).then(function (data) {
            $scope.shotsPlayer = data.data;
            console.log($scope.shotsPlayer);
        });
    });

    drubble.comments(shotId).then(function (data) {
        $scope.comments = data.data.comments;
    });

});

controllers.controller('LanguageController', function ($translate, $scope, languages) {

    $scope.change = function (value) {
        $translate.use(value);
    }

    $scope.languages = languages.languages_available;

});