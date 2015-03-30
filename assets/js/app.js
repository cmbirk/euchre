var imports = [
  'euchre.controllers',
  'euchre.directives',
  'angular-md5',
  'ui.bootstrap',
  'ui.router'
];

var app = angular.module('euchreApp', imports);

//Angular Routing
app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
  function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('index', {
        url: "/",
        controller: "HomePageController",
        templateUrl: "templates/homepage.html",
        data: {title: "Euchre.io"}
      })
      .state('learn', {
        url: "/learn",
        controller: "LearnPageController",
        templateUrl: "templates/learn.html"
      });

    $locationProvider.html5Mode(true);
  }
  ]);