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
        vm.goToAirConditionerDetails=goToAirConditionerDetails;

        activate();

        ////////////////

        function activate() {
            vm.airConditioners = airConditionerDataService.getAirConditioners();
        }

        function getWorkingAirConditionerCount() {
            return vm.airConditioners.reduce(function (accum, actualValue) {
                if (actualValue.isWorking) {
                    accum++;
                }
                return accum;
            }, 0);
        }

        function goToAirConditionerDetails(airConditioner){
            if(airConditioner){
                $location.url('/airConditioner/'+airConditioner.id);
            }
        }
    }
})();