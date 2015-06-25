describe("Air conditoner with dependencies controller tests", function () {

    var scope, controller;

    beforeEach(module("app"));

    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        controller = $controller;
    }));

    it("should bind the correct values on the scope", function () {
        var mockData = [1, 2, 3, 4, 5];
        var mockAirConditionerDataService = sinon.stub({
            getAirConditioner: function () {
            }
        });
        mockAirConditionerDataService.getAirConditioner.returns(mockData);

        var mockLocation = {};

        var airConditionerWithDependenciesCtrl = controller("airConditionerWithDependenciesCtrl", {
            "$scope": scope,
            "$location": mockLocation,
            "airConditionerWithDependenciesCtrl": mockAirConditionerDataService
        });

        expect(airConditionerWithDependenciesCtrl.airConditioners.length).toBe(5);
    });

    it("should bind the correct values on the scope", function () {
        var mockData = [1, 2, 3, 4, 5];
        var airConditioner = {id: 23};
        var mockAirConditionerDataService = sinon.stub({
            getAirConditioner: function () {
            }
        });
        mockAirConditionerDataService.getAirConditioner.returns(mockData);

        var mockLocation = sinon.stub({
            url: function () {
            }
        });

        var airConditionerWithDependenciesCtrl = controller("airConditionerWithDependenciesCtrl", {
            "$scope": scope,
            "$location": mockLocation,
            "airConditionerWithDependenciesCtrl": mockAirConditionerDataService
        });

        airConditionerWithDependenciesCtrl.goToAirConditionerDetail(airConditioner);
        expect(mockLocation.url.calledWith("/air_conditioner/23")).toBe(true);
    });
});