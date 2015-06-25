(function () {
    var app = angular.module('app', ['ngRoute']);
    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {templateUrl: 'app/AirConditioner/airConditioner.html'})
            .when('/admin', {templateUrl: 'app/Admin/admin.html'})
            .otherwise({redirectTo: '/'})
    }]);
})();