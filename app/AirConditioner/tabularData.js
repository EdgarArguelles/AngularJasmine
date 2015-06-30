'use strict';
(function () {
    var app = angular
        .module('app')
        .directive('tabularData', function () {
            return {
                restrict: 'E',
                replace: true,
                scope: {
                    data: '=',
                    showDetails: '&'
                },
                templateUrl: 'app/partials/directives/tabularData.html',
                controller: function ($scope) {
                    $scope.showAC = function (ac) {
                        $scope.showDetails()(ac);
                    }
                }
            }
        });
})();