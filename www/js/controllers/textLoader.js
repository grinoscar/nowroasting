/*jslint browser: true*/
/*global angular*/
(function(angular) {
    'use strict';
    angular.module('starter.controllers', []
    ).controller('TextLoaderCtrl', [
        '$rootScope',
        function textLoader($scope) {
            var idx;
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
                    ""
                ],
                [
                    "line 1", "line 2", "line 3", "line 4", "line 5", "line 6", "line 7"
                ]
            ];
            idx = Math.floor(Math.random() * textSet.length);
            $scope.lines = textSet[idx];
        }
    ]);
}(angular));
