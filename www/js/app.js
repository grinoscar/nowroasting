// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'starter.controllers', 'restangular'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    var updateQuoteInteral = 5;
    var intervalCount = 0;

    function clockInput(time)
    {
      var fullTimeString;
      // console.log(time);
      // console.log(time.toTimeString());
      fullTimeString = time.toTimeString();
      // console.log(fullTimeString.substring(0,2), ":", fullTimeString.substring(3,5), "AM");
      return [fullTimeString.substring(0,2), ":", fullTimeString.substring(3,5)];
    }

    function updateClock() {
      var now = new Date();

      setTimeout(updateClock, (62 - now.getSeconds()) * 1000);
      $(".split-flap.clock").splitflap("value", clockInput(now));

    }

    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
    $(".split-flap.flap-line").splitflap({
      segments: 22,
      initial: "",
      glyphSet:
        {
          ".segment": $.splitflap.extended
        }
      });

    var now = new Date();
    $(".split-flap.clock").splitflap({
      glyphSet: {
        ".hour": $.splitflap.twentyfour,
        ".separator": [":"],
        ".minute": $.splitflap.minutes
      },
      initial: clockInput(now)
    });

    setTimeout(function() {
      $(".split-flap.flap-line").splitflap("value", "");
      updateClock();
    });

  });
})
