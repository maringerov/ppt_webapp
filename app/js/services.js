'use strict';

/* Services */

var phonecatServices = angular.module('phonecatServices', ['ngResource']);

phonecatServices.factory('Phone', ['$resource',
  function($resource){
    return $resource('chapters/:chapterId.json', {}, {
      query: {method:'GET', params:{chapterId:'chapters'}, isArray:true}
    });
  }]);
