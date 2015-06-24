describe("Air Conditioner Controller Test", function () {

    var airConditionerCtrl;

    beforeEach(module("app"));

    beforeEach(inject(function ($controller, $rootScope) {
        airConditionerCtrl = $controller("airConditionerCtrl", {scope: $rootScope.$new()});
    }));

    it("should check that airConditionerCtrl exists", function () {
        expect(airConditionerCtrl).toBeDefined();
    });

    it("should check that airConditionerCtrl count is correct after activation", function () {
        expect(airConditionerCtrl.airConditioners.length).toBe(3);
    });
    
    it("should check the correct count of working airConditioners", function () {
        expect(airConditionerCtrl.getWorkingAirConditionerCount()).toBe(1);
    });
});