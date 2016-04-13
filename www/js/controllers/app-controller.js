angular.module('ser').controller('AppCtrl', ['$scope', '$ionicModal', '$timeout', 'Server', 'Common', 'ModelData', function($scope, $ionicModal, $timeout, Server, Common, ModelData) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

   var self = this;

   // Open the login modal
  self.login = function() {
    self.modal.show();
  };

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    self.modal = modal;
  });

  // Form data for the login modal
  self.loginData = {};
  

  // Triggered in the login modal to close it
  self.closeLogin = function() {
    self.modal.hide();
  };  

  // Perform the login action when the user submits the login form
  self.doLogin = function() {
    console.log('Doing login', self.loginData);

     ModelData.setData("MIVAR", 3); 

     alert("VAL: " +  ModelData.getData("MIVAR"));

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    /*$timeout(function() {
      self.closeLogin();
    }, 1000);*/

    var promise = Server.login( self.loginData.username, self.loginData.password);
    promise.then(self.onLoginOK, self.onLoginKO);  

  };


  self.onLoginOK = function (data) 
    {     
      //console.log("onLoginOK: " + JSON.stringify(data));    
      console.log("onLoginOK: " + data.status);    
      if(data.status === "OK")
      {
        //guardar token
        ModelData.setData("TOKEN", data.token); 
      
        
        //$rootScope.$emit('onResposeLoginUser', {status:'OK'});             
        //Common.goTo(urlAfter);
      }
      else
      {
        //console.log("LOGIN incorrecto!: " + data.msg);
        //if(data.code===1)      
        //$rootScope.$emit('onResposeLoginUser', {status:'KO', code:data.code});

        self.closeLogin();
        //Common.goTo('app.browse');       
        Common.goTo('app.evento', {idEvent:3});       

      }
     
    }

    self.onLoginKO = function (error) 
    {
      console.log("onLoginKO2: " + error);
      //self.closeLogin();
      
      //Common.goTo('browse');
    }


}]);