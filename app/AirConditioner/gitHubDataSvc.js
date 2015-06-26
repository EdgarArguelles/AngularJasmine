(function () {
    angular
        .module('app')
        .factory('gitHubDataService', gitHubDataService);

    gitHubDataService.$inject = ['$http'];

    /* @ngInject */
    function gitHubDataService($http) {
        return {
            get: function (user) {
                return $http.get('https://api.github.com/users/' + user)
            },
            save: function (user) {
                $http.post('https://api.github.com/users/renelopez', user);
            }
        };
    }
})();