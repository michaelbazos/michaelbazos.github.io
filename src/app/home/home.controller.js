(function () {
    'use strict';

    angular
        .module('website')
        .controller('HomeController', HomeController);

    /** @ngInject */
    function HomeController ($window, aboutService) {
        var vm = this;

        aboutService.getInfos().then(function (data) {
            vm.infos = data;
        });

        vm.open = function (link) {
            $window.open(link, '_self');
        }
    }
})();
