/*jslint browser: true*/
/*global angular*/
/**
 * Config Service
 *
 * Contains interface for retrieving and storing application
 * configuration values
 */
(function(services) {
    'use strict';
    services.factory('TextService', [
        'Restangular',
        '$scope'
        function(Restangular, $scope) {
            var idx;
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

                idx = Math.floor(Math.random() * coffeeNames.length);

                $scope.lines[0] = coffeeNames[idx];
                $scope.lines[1] = "";
                $scope.lines[2] = coffeeNames[idx];

            }

            function updateQuote() {

            }

            // Public methods
            return {
                updateCoffee: updateCoffee,
                updateQuote: updateQuote
            };
        }
    ]);
}(angular.module('starter.services')));
