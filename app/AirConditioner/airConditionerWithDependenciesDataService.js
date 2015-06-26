(function () {
    angular
        .module('app')
        .factory('airConditionerWithDependenciesDataService', airConditionerWithDependenciesDataService);

    airConditionerWithDependenciesDataService.$inject = ['gitHubDataService'];

    /* @ngInject */
    function airConditionerWithDependenciesDataService(gitHubDataService) {
        return {
            getGitHubDataByUser: function (user) {
                return gitHubDataService.get(user);
            },
            save: function (user) {
                gitHubDataService.save(user);
            }
        };
    }
})();