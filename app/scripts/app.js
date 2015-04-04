'use strict';

/**
 * @ngdoc overview
 * @name prototypeDemoApp
 * @description
 * # prototypeDemoApp
 *
 * Main module of the application.
 */
angular
  .module('prototypeDemoApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
