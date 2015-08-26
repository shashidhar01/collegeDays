/**
 * Login service
 */

angular.module('login').factory("loginService", function() {

   var verify = function(username, password) {
       //Get the username and password from the database
       if(username == 'shashi' && password == 'shashi') {
           return true;
       } else {
           return false;
       }
   }

});
