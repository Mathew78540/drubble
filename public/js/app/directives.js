'use strict';

var directives = angular.module('drubble.directives', []);

directives.directive('activeLink', function ($location) {
    return{
        restrict: 'A',
        link: function (scope, element) {
            scope.$watch(function () {
                    return $location.path();
                },
                function (path) {
                    var url = element.find('a').attr('href');

                    if (url) {
                        url = url.substring(1);
                    }

                    path == url ? element.addClass("active") : element.removeClass('active');

                });
        }
    }
});

directives.directive('shotComments', function () {
    return{
        restrict: 'E',
        templateUrl: 'pages/includes/comments.html'
    }
});

directives.directive('shots', function () {
    return{
        restrict: 'E',
        templateUrl: 'pages/includes/shots.html'
    }
});