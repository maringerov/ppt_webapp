'use strict';

/* App Module */

var phonecatApp = angular.module('phonecatApp', [
  'ngRoute',
  'phonecatControllers',
  'phonecatFilters',
  'phonecatServices'
]);

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/chapters', {
        templateUrl: 'partials/phone-home.html',
        controller: 'PhoneListCtrl'
      }).
      when('/chapters/:chapterId', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      }).
      otherwise({
        redirectTo: '/chapters'
      });
  }]);

phonecatApp.filter("emptyifblank", function(){ return function(object, query){
    if(!query)
        return {}
    else
        return object;
}});