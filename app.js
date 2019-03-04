(function () {
    'use strict';

    angular.module('DIApp', [])
    .controller('DIController', DIController);

    function DIController ($scope, $filter, $injector) {  // filter is a service that let us create filtering functions that are used for formatting the data that eventually gets displayed to the user
        $scope.name ="Yaakov";

        $scope.upper = function () {
            var upCase =$filter('uppercase')
            $scope.name = upCase($scope.name);
        };

        console.log($injector.annotate(DIController)); // $injector.annonate() gave us an array of the argument names to the function DIController
    }

    function AnnonateMe(name, job, blah) {
        return "Blah";
    }

    // console.log(AnnonateMe());
    // console.log(AnnonateMe);
    // console.log(AnnonateMe.toString());
    console.log(DIController.toString());

})();