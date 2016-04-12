// Ionic ser App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'ser' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'ser.controllers' is found in controllers.js
angular.module('ser', ['ionic', 'ngCordova', 'ngStorage']).run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)

    //alert("inicializando: " +window.cordova);
    

    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      //alert("inicializando1: " +window.cordova);
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
       //alert("inicializando2: " +window.StatusBar);
      // org.apache.cordova.statusbar required
      window.StatusBar.styleDefault();
    }

    console.log("INIT: " +  $cordovaPlugin);

    //alert("inicializando: " +window.cordova );
    initPushwoosh();
  });
});