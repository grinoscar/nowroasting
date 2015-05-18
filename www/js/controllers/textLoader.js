/*jslint browser: true*/
/*global angular*/
(function(angular) {
    'use strict';
    angular.module('starter.controllers', []
    ).controller('TextLoaderCtrl', [
        '$scope',
        function textLoader($scope) {
            var textSet = [
                [
                "line 1",
                "",
                "now roasting sumatra",
                "",
                "How does this work"
                ],
                [
                    "Now roasting guatemala antigua",
                    "",
                    "Cocoa and Lemon",
                    "Enjoy this medium roast coffee daily"
                ],
                [
                    "Gold Coast",
                    "",
                    "born in chicago",
                    ""
                ],
                [
                    "Casi Cielo:         almost heaven",
                    "pairs with fine     dining",
                    "",
                    "throughout the meal"
                ],
                [
                    " abcdefghijklmnopqrstuvwxyz",
                    " ABCDEFGHIJKLMNOPQRSTUVWXYZ",
                    "0123456789!@#$%&*.?\"+-=/<>:)(",
                    "",
                    "bunches of .+*? stuff."
                ],
                [
                    "line 1", "line 2", "line 3", "line 4", "line 5", "line 6"
                ]
            ];

            $scope.lines = textSet[5];

            setTimeout(function() {
                updateData();
            }, 500);


        }
    ]);
}(angular));
