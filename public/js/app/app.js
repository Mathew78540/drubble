'use strict';

var app = angular.module('drubble', [
    'ngRoute',
    'drubble.controllers',
    'drubble.directives',
    'drubble.services',
    'pascalprecht.translate'
]);

/*
 ROUTES
 */
app.config(function ($routeProvider, $locationProvider) {

    $routeProvider
        .when('/shot/:id', {
            templateUrl: '/pages/shot.html',
            controller: 'ShotController'
        })
        .when('/:list', {
            templateUrl: '/pages/home.html',
            controller: 'ShotsListController'
        })
        .otherwise({redirectTo: '/popular'});

    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');

});

/*
 TRANSLATE
 */
app.config(function ($translateProvider) {

    $translateProvider.useStaticFilesLoader({
        prefix: '/public/languages/',
        suffix: '.json'
    });

    $translateProvider.preferredLanguage('fr');

});