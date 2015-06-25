describe("Air conditioner with dependencies controller tests", function () {

    var scope, controllerConstructor;

    beforeEach(module('app'));
    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        controllerConstructor = $controller;
    }));


    it('should bind the correct values on the scope', function () {
        var mockData = [1, 2, 3, 4, 5];
        var mockAirConditionerDataService = sinon.stub({
            getAirConditioners: function () {
            }
        });
        mockAirConditionerDataService.getAirConditioners.returns(mockData);
        var mockedLocation = {};
        var airConditionerWithDependenciesCtrl = controllerConstructor('airConditionerWithDependenciesCtrl',
            {scope: scope, $location: mockedLocation, airConditionerDataService: mockAirConditionerDataService});
        expect(airConditionerWithDependenciesCtrl.airConditioners.length).toBe(5);
    });


    it('should check the functionality of go to patientDetails', function () {
        var mockData = [1, 2, 3, 4, 5];
        var airConditioner = {id: 23};
        var mockAirConditionerDataService = sinon.stub({
            getAirConditioners: function () {
            }
        });
        mockAirConditionerDataService.getAirConditioners.returns(mockData);


        var mockedLocation = sinon.stub({
            url: function () {
            }
        });


        var airConditionerWithDependenciesCtrl = controllerConstructor('airConditionerWithDependenciesCtrl',
            {scope: scope, $location: mockedLocation, airConditionerDataService: mockAirConditionerDataService});

        airConditionerWithDependenciesCtrl.goToAirConditionerDetails(airConditioner);

        expect(mockedLocation.url.calledWith("/airConditioner/23")).toBe(true);
    });

});