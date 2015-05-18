// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'starter.controllers', 'restangular'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function($scope, $jquery) {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    var updateQuoteInteral = 5;
    var intervalCount = 0;
    var coffeeNames = [
      "Sumatra",
      "Kenya",
      "DCF espresso",
      "Espresso",
      "Guatemala Antigua",
      "Rwanda (red)",
      "Casi Cielo",
      "Cold Brew"
    ];

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

      // load new $scope.lines.

      // random coffee.


      // every 5th time, update quote from restangular call to http://www.iheartquotes.com/api/v1/random?format=json&max_lines=2

    }

    function updateData() {

      setTimeout(TextService.updateCoffee, 30000);

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
      // [" ","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",".","?","!",",",";",":","0","1","2","3","4","5","6","7","8","9"]
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

    // $(".split-flap.roaster-location").splitflap({
    //   segments: 1,
    //   initial: "",
    //   case: "upper",
    //   tickLength: 500,
    //   glyphSet:
    //   {
    //     ".plant-name": ["Kent","York","Roastery","Amsterdam","Sandy Run","TATA","Seattle SSC"]
    //   }
    // });

    setTimeout(function() {
      $(".split-flap.flap-line").splitflap("value", "");
      updateClock();
      // $(".split-flap.clock").splitflap("value", )
    });

    // setTimeout(updateClock, (62 - now.getSeconds()) * 1000);

  });
})
