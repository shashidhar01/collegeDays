/**
 Login controller.
 */
angular.module('login')
.controller("LoginCtrl", ["loginService","$scope", "$location", function(loginService, $scope, $location) {

         $scope.verifyLogin = function(){

            var username = $scope.username;
            var password = $scope.password;

            var result = loginService.verifyLogin(username, password);
            if (result) {
                $location.path('/userDashboard');
            }
        }

    }]);

