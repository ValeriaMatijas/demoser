angular.module('ser').controller('PlaylistCtrl', ['$stateParams', 'Utils', function( $stateParams, Utils) {
  var self = this;

  self.clickBoton = function()
  {
  	var avl = Utils.appTwitterAvailability();

  	//var cad = Utils.dateToDDMMYYYY();

  	alert("AVL: " + avl);
    //alert("click!");
    var ID = "LauRozRub";
    //window.open("fb://profile/" + ID, '_system');
    //window.open("https://www.facebook.com/choicefm1043");

  };  
}]);
