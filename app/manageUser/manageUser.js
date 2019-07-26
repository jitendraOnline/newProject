'use strict';

angular.module('myApp.manageUser', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/manageUser', {
    templateUrl: 'manageUser/manageUser.html',
    controller: 'manageUserCtrl'
  });
}])

.controller('manageUserCtrl', [function() {

}]);