(function () {
    angular
        .module('app')
        .filter('ordinalNumber', ordinalNumber);

    /* @ngInject */
    function ordinalNumber() {
        return function (number) {
            switch (number) {
                case 1:
                    return 'first';
                    break;
                case 2:
                    return 'second';
                    break;
                case 3:
                    return 'third';
                    break;
                case 4:
                    return 'fourth';
                    break;
                case 5:
                    return 'fifth';
                    break;
                case 6:
                    return 'sixth';
                    break;
                case 7:
                    return 'seventh';
                    break;
                case 8:
                    return 'eighth';
                    break;
                case 9:
                    return 'ninth';
                    break;
                case 10:
                    return 'tenth';
                    break;
            }
        };
    }
})();