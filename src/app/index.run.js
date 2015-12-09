(function () {
    'use strict';

    angular
        .module('website')
        .run(runBlock);

    /** @ngInject */
    function runBlock($rootScope, $state) {

        $rootScope.$state = $state;

    }

})();
