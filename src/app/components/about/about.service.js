(function() {
    'use strict';

    angular
        .module('website')
        .service('aboutService', aboutService);

    /** @ngInject */
    function aboutService ($q) {

        var infos = {
            name: 'Michael P. Bazos',
            location: 'Paris, France',
            links: [
                {title: 'Github', icon: 'github', href: 'https://github.com/michaelbazos'},
                {title: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/in/michaelbazos'},
                {title: 'Stack Overflow', icon: 'stack-overflow', href: 'http://stackoverflow.com/users/3120193/michael-p-bazos'},
                {title: 'Twitter', icon: 'twitter', href: 'https://twitter.com/michaelbazos'}
            ],
            roles: ['Contributor', 'Developer', 'Traveler', 'Jogger', 'Sleeper']
        };

        /**
         * Returns about information
         */
        this.getInfos = function () {
            return $q.when(infos);
        };

        /**
         * Returns roles
         */
        this.getRoles = function () {
            return $q.when(infos.roles);
        };

        return this;
    }

})();
