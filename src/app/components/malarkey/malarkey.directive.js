(function() {
    'use strict';

    angular
        .module('website')
        .directive('malarkey', malarkey);

    /** @ngInject */
    function malarkey (malarkey) {
        return {
            restrict: 'E',
            scope: {
                extraValues: '='
            },
            link: linkFunc,
            controller: MalarkeyController,
            controllerAs: 'vm'
        };

        function linkFunc (scope, el, attrs, vm) {
            var watcher;
            var typist = malarkey(el[0], {
                typeSpeed: 50,
                deleteSpeed: 70,
                pauseDelay: 1000,
                loop: true,
                postfix: ' '
            });

            el.addClass('malarkey');

            scope.extraValues = [].concat(['==============']);
            angular.forEach(scope.extraValues, function(value) {
                typist.type(value).pause().delete();
            });

            watcher = scope.$watch('vm.roles', function () {
                angular.forEach(vm.roles, function (role) {
                    typist.type(role).pause().delete();
                });
            });

            scope.$on('$destroy', function () {
                watcher();
            });
        }

        /** @ngInject */
        function MalarkeyController(aboutService) {
            var vm = this;

            vm.roles = [];

            activate();

            function activate () {
                aboutService.getRoles().then(function (roles) {
                    vm.roles = roles
                });
            }
        }

    }

})();
