'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
  'ngRoute',
  'myApp.searchUser',
  'myApp.adminReports',
  'myApp.internalUser',
  'myApp.externalUser',
  'myApp.manageUser',
  
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/searchUser'});
}])

.controller('appController',['$scope', function($scope) {
  $scope.home = true;
  $scope.searchUser = false;
  $scope.manageUser = false;
  $scope.adminReport = false;
  $scope.internalUser = false;
  $scope.externalUser = false;
 }]);