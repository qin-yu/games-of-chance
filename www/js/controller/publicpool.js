angular.module('publicpool', ['app.services'])

.controller('publicGoodsCtrl', function($scope, PublicpoolCheck) {
      
    $scope.poolProp = {};
    /* 
    Note that ng-model can be used directly to create a string like poolname, so no need of making it an object.
    However, after adding 'ion-view'and 'ion-content' it has to be a key in an object to work.
    Well maybe not the only way but this is my approach.
    */

    $scope.addPool = function() {
        PublicpoolCheck.addPool($scope.poolProp);
        $scope.poolProp = {};
    };

    $scope.deletePool = function(key) {
        PublicpoolCheck.deletePool(key);
    }; 
    
    $scope.joinPool = function (key) {
        //PublicpoolCheck.joinPool(key, false);
    };
    
    $scope.quitPool = function (key) {
        PublicpoolCheck.quitPool(key);
    }
})