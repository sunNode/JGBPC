angular.module('techNodeApp').config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider.
  when('/rooms', {
    templateUrl: '/pages/rooms.html',
    controller: 'RoomsCtrl'
  }).
  when('/rooms/:_roomId', {
    templateUrl: '/pages/room.html',
    controller: 'RoomCtrl'
  }).
  when('/analystRoom',{
     templateUrl:'/pages/analystRoom.html',
     controller:'AnalystCtrl'
  }).
  when('/login', {
    templateUrl: '/pages/login.html',
    controller: 'LoginCtrl'
  }).
  otherwise({
    redirectTo: '/index'
  })
}])
