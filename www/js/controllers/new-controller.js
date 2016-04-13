angular.module('ser').controller('NewCtrl', ['$stateParams','Utils', function( $stateParams, Utils) {
  var self = this;

  self.init = function()
  {
    console.log("INIT NEW: " + $stateParams.idNew);

    self.content = "<p>esto es un parrafo a ver como se muestra</p>"
  }  

  self.clickBoton = function()
  {
  	///alert("1: " + cordova);
  	//alert("2: " + cordova.InAppBrowser);
  	//alert("3: " + "---");
  	//alert("3: " + cordova.InAppBrowser.open);
  	
  	var fbAvailable = Utils.appTwitterAvailability();

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
    //var ID = "pepe";
    //window.open("fb://profile/" + ID, '_system');
    //window.open('https://www.google.es', '_system', 'location=no');
    //window.open("fb://profile/" + ID, '_system');
    window.open("twitter://user?screen_name=qordas", '_system');
    
    //window.open("https://www.facebook.com/choicefm1043");

  };  

  self.init();
}]);
