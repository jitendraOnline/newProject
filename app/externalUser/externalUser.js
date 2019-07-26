'use strict';

angular.module('myApp.externalUser', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/externalUser', {
    templateUrl: 'externalUser/externalUser.html',
    controller: 'externalUserCtrl'
  });
}])

.controller('externalUserCtrl', [function() {

}]);