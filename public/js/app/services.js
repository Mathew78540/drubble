'use strict';

var services = angular.module('drubble.services', []);

services.factory('drubble', function($http){

    function loadApi (path, params) {
        params = params || {};
        params.callback = "JSON_CALLBACK";
        return $http.jsonp("http://api.dribbble.com" + path, {params: params});
    }

    return{
        shots: function(type, params){
            params = params || {};
            return loadApi("/shots/" + type, params);
        },
        shot: function(id, params){
            params = params || {};
            return loadApi("/shots/" + id, params);
        },
        comments: function(id, params){
            params = params || {};
            return loadApi("/shots/" + id + '/comments', params);
        },
        shotsByPlayerId: function(id, params){
            params = params || {};
            return loadApi('/players/' + id + '/shots', params);
        }

    }

});

services.factory('languages', function(){
    return{
        languages_available: ['fr', 'en']
    }
});