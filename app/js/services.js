'use strict';

/* Services */

var phonecatServices = angular.module('phonecatServices', ['ngResource']);

phonecatServices.factory('Phone', ['$resource',
  function($resource){
    return $resource('phones/:chapterId.json', {}, {
      query: {method:'GET', params:{chapterId:'chapters'}, isArray:true}
    });
  }]);
