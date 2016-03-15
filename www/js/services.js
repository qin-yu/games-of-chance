angular.module('app.services', [])

.factory('Authentication', ['$rootScope', '$firebaseAuth', 'FIREBASE_URL', function($rootScope, $firebaseAuth, FIREBASE_URL){
    var ref = new Firebase(FIREBASE_URL);
    var auth = $firebaseAuth(ref);
    
    return {
        // Because I input user into functions so $scope no longer needed:
        login: function(user) {
            $rootScope.message = "Welcome " + $scope.user.email;
        }, //login

        register: function(user) {
            auth.$createUser({
                email: user.email,
                password: user.password
            }).then(function(regUser) {
                $rootScope.message = "Hi " + user.firstname +
                ", Thanks for registering";
            }).catch(function(error) {
                $rootScope.message = error.message;
            }); // //createUser
        } // register
    };
}])

.service('BlankService', [function(){

}]);

