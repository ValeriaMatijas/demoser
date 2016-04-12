angular.module('ser').controller('PlaylistCtrl', ['$stateParams', function( $stateParams) {
  var self = this;

  self.clickBoton = function()
  {
    console.log("click!");
    var ID = "humorcabron";
    window.open("facebook://" + ID, '_system');
  };  
}]);
