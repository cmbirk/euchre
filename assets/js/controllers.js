angular.module('euchre.controllers', [])
  .controller('HomePageController', ['$scope', 'md5',
    function ($scope, md5) {

      $scope.startGame = function () {
        var date = new Date();
        var hash = md5.createHash(date.toString());
        console.log(hash);
      };
    }
  ]);