describe('Ordinal Number filter Test', function () {
    var $filter;

    beforeEach(module('app'));

    beforeEach(inject(function (_$filter_) {
        $filter = _$filter_;
    }));

    it('should filter the value 7 correctly', function () {
        var ordinalNumber = $filter("ordinalNumber")(7);
        expect(ordinalNumber).toBe('seventh');
    });

    it('should filter the value 10 correctly', function () {
        var ordinalNumber = $filter("ordinalNumber")(10);
        expect(ordinalNumber).toBe('tenth');
    });
});