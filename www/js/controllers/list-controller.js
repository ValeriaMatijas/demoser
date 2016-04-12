angular.module('ser').controller('PlaylistCtrl', ['$stateParams', function( $stateParams) {
  var self = this;

  self.clickBoton = function()
  {
  	var fbAvailable = appTwitterAvailability();

  	//var cad = Utils.dateToDDMMYYYY();

  	alert("fbAvailable: " + fbAvailable);

  	if(fbAvailable == true)
  	{
  		//window.open("fb://profile/" + ID, '_system', 'location=no');
  	}
  	else
  	{
		//window.open('https://www.google.es', '_system', 'location=no'); }
  	}
    //alert("click!");
    var ID = "LauRozRub";
    
    //window.open("https://www.facebook.com/choicefm1043");

  };  
}]);
