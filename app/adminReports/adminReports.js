'use strict';

angular.module('myApp.adminReports', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/adminReports', {
    templateUrl: 'adminReports/adminReports.html',
    controller: 'adminReportsCtrl'
  });
}])

.controller('adminReportsCtrl', [function() {

}]);