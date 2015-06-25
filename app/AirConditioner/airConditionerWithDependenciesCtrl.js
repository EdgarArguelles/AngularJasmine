(function () {
    angular
        .module('app')
        .controller('airConditionerWithDependenciesCtrl', airConditionerWithDependenciesCtrl);

    airConditionerWithDependenciesCtrl.$inject = ['$location','airConditionerDataService'];

    /* @ngInject */
    function airConditionerWithDependenciesCtrl($location, airConditionerDataService) {
        /* jshint validthis: true */
        var vm = this;
        vm.airConditioners = [];
        vm.getWorkingAirConditionerCount = getWorkingAirConditionerCount;
        vm.goToAirConditionerDetail = goToAirConditionerDetail;

        activate();

        ////////////////

        function activate() {
            vm.airConditioners = airConditionerDataService.getAirConditioner();
        }

        function getWorkingAirConditionerCount() {
            return vm.airConditioners.reduce(function (accum, actualValue) {
                if (actualValue.isWorking) {
                    accum++;
                }
                return accum;
            }, 0);
        }

        function goToAirConditionerDetail(airConditioner) {
            if (airConditioner) {
                $location.url("/air_conditioner/" + airConditioner.id);
            }
        }
    }
})();