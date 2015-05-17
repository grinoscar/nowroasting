/*jslint browser: true*/
/*global angular*/
/**
 * split flap directives
 */
(function(angular) {
    'use strict';
    angular.module('starter')
        .directive('splitFlapOutput', function () {
            return {
                restrict: 'EA', //Element, Attribute, Class, coMment
                scope: {
                    text: '@'
                },
                require: "ngModel",
                link: function($scope, attr, elem, ngModel) {
                    $scope.$watch(
                        function flapWatch(){
                            return ngModel.$modelValue;
                        },
                        function flapListen(newVal, oldVal, self){
                            // console.log(newVal);
                            if (newVal) {
                                setTimeout(function() {
                                    $('#'+elem.id).splitflap("value", newVal)
                                }, 1900);
                            }
                            //  else {
                            //     setTimeout(function() {
                            //         $('#'+elem.id).splitflap("value", "")
                            //     }, 19000);
                            // }
                        });
                    }
                }
        });
}(angular));
