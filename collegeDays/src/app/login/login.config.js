
angular.module('login', [
    'ui.router',
    'ngRoute'
])
    .config(function config($stateProvider) {
        "use strict";
        $stateProvider.state('login', {
            url: '/login',
            views: {
                "main": {
                    controller: 'LoginCtrl',
                    templateUrl: 'html-templates/src/app/login/login.tpl.html'
                }
            },
            data: {pageTitle: 'Login page'}
        });
    })

