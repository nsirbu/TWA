'use strict';

// Declare app level module which depends on views, and components.
angular.module('myApp', [
    'ngRoute',
    'myApp.quiz_controller'
]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.otherwise({redirectTo: '/quiz_view'});
}]);
