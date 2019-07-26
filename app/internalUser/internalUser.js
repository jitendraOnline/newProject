'use strict';

angular.module('myApp.internalUser', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/internalUser', {
    templateUrl: 'internalUser/internalUser.html',
    controller: 'internalUserCtrl'
  });
}])

.controller('internalUserCtrl', [function() {

}]);