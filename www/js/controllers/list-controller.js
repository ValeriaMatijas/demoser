angular.module('ser').controller('PlaylistCtrl', ['$stateParams','Utils', '$cordovaInAppBrowser', function( $stateParams, Utils, $cordovaInAppBrowser) {
  var self = this;

 //console.log("$cordovaInAppBrowser: " + $cordovaInAppBrowser);
  //console.log(" $cordovaAppAvailability: " +  $cordovaAppAvailability);

  self.clickBoton = function()
  {
  	
  	//var fbAvailable = Utils.appTwitterAvailability();

  	//alert("fbAvailable: " + fbAvailable);

  	/*if(fbAvailable == true)
  	{
  		//window.open("fb://profile/" + ID, '_system', 'location=no');
  	}
  	else
  	{
		//window.open('https://www.google.es', '_system', 'location=no'); }
  	}*/
    //alert("click!");
    var ID = "100008778816010";
    window.open("fb://profile/" + ID, '_system');
    
    //window.open("https://www.facebook.com/choicefm1043");

  };  
}]);
