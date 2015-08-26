angular.module('userDashboard', [
    'ui.router',
    'ngRoute'
])
    .config(function config($stateProvider) {
        "use strict";
        $stateProvider.state('userDashboard', {
            url: '/userDashboard',
            views: {
                "main": {
                    controller: 'userDashboardCtrl',
                    templateUrl: 'html-templates/src/app/userDashboard/userDashboard.tpl.html'
                }
            },
            data: {pageTitle: 'User Dashbaord page'}
        });
    })


