/**
 Login controller.
 */

var login = angular.module('login');

login.controller("LoginCtrl",  function(loginService, $scope, $location) {

         $scope.verifyLogin = function(){

            var username = $scope.username;
            var password = $scope.password;

            var result = loginService.verify(username, password);
            if (result) {
                $location.path('/userDashboard');
            }
        }

    });

