// Declare app level module which depends on controllers, services, directives and filters module.
angular.module('collegeGate',
    [   'home',
        'login',
        'userDashboard',
        'ngRoute', 'ui.router',
    ])

    .config(function ($stateProvider, $urlRouterProvider) {
    "use strict";

    $urlRouterProvider.otherwise('/home');
})
    .run(function run() {
    });





