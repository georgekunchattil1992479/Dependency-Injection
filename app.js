(function () {
    'use strict';

    angular.module('DIApp', [])
    .controller('DIController', DIController);

    function DIController ($scope, $filter) {  // filter is a service that let us create filtering functions that are used for formatting the data that eventually gets displayed to the user
        $scope.name ="Yaakov";

        $scope.upper = function () {
            var upCase =$filter('uppercase')
            $scope.name = upCase($scope.name);
        }
    };
})();