(function(){
angular
    .module('app')
    .controller('airConditionerCtrl', airConditionerCtrl);

//airConditionerCtrl.$inject = [''];

/* @ngInject */
function airConditionerCtrl() {
    /* jshint validthis: true */
    var vm = this;
    vm.airConditioners=[];
    vm.getWorkingAirConditionerCount=getWorkingAirConditionerCount;

    activate();

    ////////////////

    function activate() {
        vm.airConditioners=[
            {
                brand:'LG',
                description:'A powerful air conditioner',
                cost:'10000',
                isWorking:false
            },
            {
                brand:'Philips',
                description:'A great air conditioner',
                cost:'7000',
                isWorking:false
            },
            {
                brand:'General Electric',
                description:'A tiny air conditioner',
                cost:'3000',
                isWorking:true
            }
        ]
    }

    function getWorkingAirConditionerCount(){
        return vm.airConditioners.reduce(function(accum,actualValue){
            if(actualValue.isWorking) {
                accum++;
            }
            return accum;
        },0)
    }


}
})();