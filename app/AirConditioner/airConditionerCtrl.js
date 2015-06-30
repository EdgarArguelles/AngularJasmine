(function () {
    angular
        .module('app')
        .controller('airConditionerCtrl', airConditionerCtrl);

    /* @ngInject */
    function airConditionerCtrl() {
        var vm = this;
        vm.airConditioners = [];
        vm.getWorkingAirConditionerCount = getWorkingAirConditionerCount;
        vm.showDetails = showDetails;
        activate();

        function activate() {
            vm.airConditioners = [
                {
                    brand: 'LG',
                    description: 'A powerful air conditioner',
                    cost: '10000',
                    isWorking: false
                },
                {
                    brand: 'Philips',
                    description: 'A great air conditioner',
                    cost: '7000',
                    isWorking: false
                },
                {
                    brand: 'General Electric',
                    description: 'A tiny air conditioner',
                    cost: '3000',
                    isWorking: true
                }
            ]
        }

        function getWorkingAirConditionerCount() {
            return vm.airConditioners.reduce(function (accum, actualValue) {
                if (actualValue.isWorking) {
                    accum++;
                }
                return accum;
            }, 0)
        }

        function showDetails(ac) {
            alert(ac.brand);
        }
    }
})();