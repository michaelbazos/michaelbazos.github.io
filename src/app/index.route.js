(function () {
    'use strict';

    angular
        .module('website')
        .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/home/home.html',
                controller: 'HomeController',
                controllerAs: 'home'
            });

        $urlRouterProvider.otherwise('/');
    }

})();
