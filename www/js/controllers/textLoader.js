/*jslint browser: true*/
/*global angular*/
(function(angular) {
    'use strict';
    angular.module('starter.controllers', []
    ).controller('TextLoaderCtrl', [
        '$scope',
        '$timeout',
        function textLoader($scope, $timeout) {
            var textSet =
                [
                    "", "", "", "", "", "", "", "", "", ""
                ];
            var coffeeNames = [
              "Sumatra",
              "Kenya",
              "DCF espresso",
              "Espresso",
              "Guatemala Antigua",
              "Rwanda",
              "Casi Cielo",
              "Cold Brew"
            ];


           function updateCoffee() {
                var idx;

                $timeout(updateCoffee, 120000);

                $timeout(function applyCoffeeName () {
                    idx = Math.floor(Math.random() * coffeeNames.length);

                    $scope.lines[0] = coffeeNames[idx];
                    $scope.lines[1] = " ";
                    $scope.lines[2] = " ";
                    _.defer(function() {
                        $scope.$apply();
                    });
                }, 250);

            }

            $scope.lines = textSet;

            $timeout(function() {
                 updateCoffee();
            }, 2500);

        }
    ]);
}(angular));
