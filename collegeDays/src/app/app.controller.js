/**
 * Created by kosarp on 11/21/2014.
 */

angular.module('collegeGate')

    .controller('AppCtrl', function AppCtrl($scope) {
        "use strict";

        $scope.$on('$stateChangeSuccess', function (event, toState) {
            if (angular.isDefined(toState.data.pageTitle)) {
                $scope.pageTitle = toState.data.pageTitle;
            }
        });
    });