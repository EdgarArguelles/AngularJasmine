describe("Air Conditioner Data Service Test", function () {

    beforeEach(module("app"));

    it("should check the correct length of airConditioners", inject(function (airConditionerDataService) {
        expect(airConditionerDataService.getAirConditioners().length).toBeGreaterThan(0);
    }));
});