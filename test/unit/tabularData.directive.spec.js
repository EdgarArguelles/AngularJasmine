describe('Tabular Data Directive Specs', function () {

    var el, stubShowDetails;

    beforeEach(module('app'));
    beforeEach(module('app/partials/directives/tabularData.html'));

    beforeEach(inject(function ($compile, $rootScope) {
        //set up scope
        var scope = $rootScope.$new();
        stubShowDetails = sinon.stub();
        scope.showDetails = stubShowDetails;
        scope.airConditioners = [
            {
                brand: 'MockedBrand',
                description: 'MockedDescription',
                cost: '36526523',
                isWorking: true
            }
        ];

        //create and compile directive
        el = angular.element('<tabular-data data="airConditioners" show-details="showDetails"></tabular-data>');
        $compile(el)(scope);
        scope.$digest();
    }));

    it('should test that the directive was correctly rendered', function () {
        expect(el.text()).toContain('MockedBrand');
    });

    it('should check that the binding was clicked', function () {
        click(el.find('tr')[1]);
        expect(stubShowDetails.called).toBeTruthy();
    });

    //For some reason PhantomJS does not have a click() function in it.
    //Need to create a cross browser click() function no .click() in PhantomJS
    function click(el) {
        var ev = document.createEvent('MouseEvent');
        ev.initMouseEvent(
            'click',
            true /* bubble */, true /* cancelable */,
            window, null,
            0, 0, 0, 0, /* coordinates */
            false, false, false, false, /* modifier keys */
            0 /*left*/, null
        );
        el.dispatchEvent(ev);
    }
});