angular.module('euchre.directives', [])
  .directive('card', function () {
    return {
      restrict: 'AECM',
      templateUrl: '/templates/card.html'
    };
  });