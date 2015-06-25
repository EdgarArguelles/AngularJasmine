describe("Air conditioner with dependencies controller tests", function () {

    var mockData = [1, 2, 3, 4, 5];
    var controllerConstructor, mockAirConditionerDataService, mockedLocation;

    beforeEach(module('app'));

    beforeEach(inject(function ($controller) {
        controllerConstructor = $controller;

        mockAirConditionerDataService = sinon.stub({
            getAirConditioners: function () {
            }
        });
        mockAirConditionerDataService.getAirConditioners.returns(mockData);
        mockedLocation = sinon.stub({
            url: function () {
            }
        });
    }));


    it('should bind the correct values on the scope', function () {
        var airConditionerWithDependenciesCtrl = controllerConstructor('airConditionerWithDependenciesCtrl',
            {$location: mockedLocation, airConditionerDataService: mockAirConditionerDataService});

        expect(airConditionerWithDependenciesCtrl.airConditioners.length).toBe(mockData.length);
    });


    it('should check the functionality of go to patientDetails', function () {
        var airConditioner = {id: 23};
        var airConditionerWithDependenciesCtrl = controllerConstructor('airConditionerWithDependenciesCtrl',
            {$location: mockedLocation, airConditionerDataService: mockAirConditionerDataService});

        airConditionerWithDependenciesCtrl.goToAirConditionerDetails(airConditioner);

        expect(mockedLocation.url.calledWith("/airConditioner/" + airConditioner.id)).toBe(true);
    });
});