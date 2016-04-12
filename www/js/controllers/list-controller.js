angular.module('ser').controller('PlaylistCtrl', ['$stateParams', function( $stateParams) {
  var self = this;

  self.clickBoton = function()
  {
    //alert("click!");
    var ID = "LauRozRub";
    window.open("fb://profile/" + ID, '_system');
    //window.open("https://www.facebook.com/choicefm1043");

  };  
}]);
