!function(){"use strict";angular.module("website",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ui.router","ui.bootstrap","toastr"])}(),function(){"use strict";function e(e){function t(t,o,n,i){var a,r=e(o[0],{typeSpeed:50,deleteSpeed:70,pauseDelay:1e3,loop:!0,postfix:" "});o.addClass("malarkey"),t.extraValues=[].concat(["============="]),angular.forEach(t.extraValues,function(e){r.type(e).pause()["delete"]()}),a=t.$watch("vm.roles",function(){angular.forEach(i.roles,function(e){r.type(e).pause()["delete"]()})}),t.$on("$destroy",function(){a()})}function o(e){function t(){e.getRoles().then(function(e){o.roles=e})}var o=this;o.roles=[],t()}return o.$inject=["aboutService"],{restrict:"E",scope:{extraValues:"="},link:t,controller:o,controllerAs:"vm"}}angular.module("website").directive("malarkey",e),e.$inject=["malarkey"]}(),function(){"use strict";function e(e){var t={name:"Michael P. Bazos",location:"The Internet",links:[{title:"Stack Overflow",icon:"stack-overflow",href:"http://stackoverflow.com/users/3120193/michael-p-bazos"},{title:"LinkedIn",icon:"linkedin",href:"https://www.linkedin.com/in/michaelbazos"},{title:"Twitter",icon:"twitter",href:"https://twitter.com/michaelbazos"},{title:"Github",icon:"github",href:"https://github.com/michaelbazos"}],roles:["Contributor","Developer","Traveler","Jogger","Sleeper"]};return this.getInfos=function(){return e.when(t)},this.getRoles=function(){return e.when(t.roles)},this}angular.module("website").service("aboutService",e),e.$inject=["$q"]}(),function(){"use strict";function e(e,t){var o=this;t.getInfos().then(function(e){o.infos=e}),o.open=function(t){e.open(t,"_self")}}angular.module("website").controller("HomeController",e),e.$inject=["$window","aboutService"]}(),function(){"use strict";function e(e,t){e.$state=t}angular.module("website").run(e),e.$inject=["$rootScope","$state"]}(),function(){"use strict";function e(e,t){e.state("home",{url:"/",templateUrl:"app/home/home.html",controller:"HomeController",controllerAs:"home"}),t.otherwise("/")}angular.module("website").config(e),e.$inject=["$stateProvider","$urlRouterProvider"]}(),function(){"use strict";angular.module("website").constant("malarkey",malarkey).constant("moment",moment)}(),function(){"use strict";function e(e,t){e.debugEnabled(!0),t.allowHtml=!0,t.timeOut=3e3,t.positionClass="toast-top-right",t.preventDuplicates=!0,t.progressBar=!0}angular.module("website").config(e),e.$inject=["$logProvider","toastrConfig"]}(),angular.module("website").run(["$templateCache",function(e){e.put("app/home/home.html",'<div class="container flex-container"><section class="about-me center-block"><div class="about-me__name">{{home.infos.name}}</div><div class="about-me__roles">#<malarkey></malarkey></div><div class="about-me__location"><i class="fa fa-street-view"></i> <b>{{home.infos.location}}</b></div><ul class="list-inline about-me__links"><li ng-repeat="link in home.infos.links" ng-click="home.open(link.href)"><i class="fa fa-{{link.icon}}"></i></li></ul></section></div>')}]);
//# sourceMappingURL=../maps/scripts/app-b0eb2c34f0.js.map