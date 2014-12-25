var imports = [
  'euchre.directives',
  'ui.bootstrap',
  'ui.router'
];

var app = angular.module('euchre', imports);

//Angular Routing
app.config(['$stateProvider', '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider){
    $stateProvider
    .state('index', {
      url: "/",
      controller: "HomePageController",
      templateUrl: "templates/homepage.html",
      data: {title: "Euchre.io"}
    });
    // .state('profile-page', {
    //   url: "/user/{id}",
    //   controller: "ProfilePageController",
    //   templateUrl: "templates/profile.html"
    // });
  }
]);