var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider){
 $routeProvider

.when('/',{
  templateUrl:'welcome.html',
  controller:'welcomeCtrl'
})

.when('/sec',{
  templateUrl: 'second.html',
  controller: 'secondCtrl'
})

.when('/third', {
  templateUrl: 'third.html',
  controller: 'thirdCtrl'
})
.otherwise({redirectTo:'/sec'})

});

app.controller('welcomeCtrl', function($scope){

  $scope.message = 'Welcome to SPA angularJs'
});

app.controller('secondCtrl', function($scope){

  $scope.messageTwo = ' Welcome to SecondControl'
});

app.controller('thirdCtrl', function($scope){

    $scope.students = [
        {name:'sowmiya', city:'San jose'},
        {name:'madhu', city:'chicago'},
        {name:'sugan', city:'phoenix'}
     ];
  $scope.messageThree = 'Welcome to ThirdControl'
});