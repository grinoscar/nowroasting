/*jslint browser: true*/
/*global angular*/
/**
 * Text Service
 *
 * Contains interface for retrieving random coffee and quotes.
 */
(function(services) {
    'use strict';
    services.factory('TextService', [
        'restangular',
        '$rootScope',
        function(restangular, $scope) {
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
