'use strict';

angular.module('myApp.searchUser', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/searchUser', {
    templateUrl: 'searchUser/searchUser.html',
    controller: 'View1Ctrl'
  });
}])

 .controller('View1Ctrl',['$scope', function($scope) {
  $scope.username = 1234;
  $scope.showAdvancedSearch=false;

  $scope.showAdvancedSearchMenu = function() {
    console.log("i am called"+$scope.showAdvancedSearch);
    if($scope.showAdvancedSearch==true){
      $scope.showAdvancedSearch=false;
    }
    else{
      $scope.showAdvancedSearch=true;
    }
    
  };

  $scope.userData = {
    name: 'James',
    AccountNumber: 123,
    createdDate: new Date(),
    gender: 'male',
    trainingType: 'online',
    maths: false,
    physics: true,
    chemistry: true
};

$scope.userList=[{
  UserName:"Johnmoe@email.com",
  UserType:"LFB-IBU-NA-US-RSM",
  SalesOrg:"0010",
  Lock:"N",
  FirstName:"John",
  LastName:"Moe",
  Useremail:"Johnmoe@example.com",
  Expiration:"False"
},{
  UserName:"Aditya@email.com",
  UserType:"LFB-IBU-NA-US-RSM",
  SalesOrg:"0010",
  Lock:"N",
  FirstName:"Aditya",
  LastName:"delta",
  Useremail:"Johnmoe@example.com",
  Expiration:"False"
},{
  UserName:"sumit@email.com",
  UserType:"LFB-IBU-NA-US-RSM",
  SalesOrg:"0010",
  Lock:"N",
  FirstName:"Sumit",
  LastName:"log",
  Useremail:"Johnmoe@example.com",
  Expiration:"False"
}]

$scope.manageUserScreen = function(User) {
  console.log(User);
}


}]);