'use strict';

angular.module('app', [
  'ui-router'
])

.config(function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider){
  
  //three states
  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html'
    })
    .state('signup', {
      url: '/signup',
      templateUrl: 'templates/signup.html'
    })
    .state('home', {
      url: '/',
      templateUrl: 'templates/home.html'
    });

  //for url undefined by the above, redirect to the home state
  $urlRouterProvider.otherwise('/');

});