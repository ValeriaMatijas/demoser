angular.module('ser').controller('EventCtrl', ['$stateParams','Utils', 'ModelData', 'Types', function( $stateParams, Utils, ModelData, Types) {
  var self = this;

  self.init = function()
  {
    console.log("INIT EVENT: " + $stateParams.idEvent);
  }  

  self.clickBoton = function()
  {
    ModelData.setData("menu", Types.MENU_PROFESIONAL);

    console.log("MEN: " +  ModelData.getData("menu"));
  };  

  self.init();
}]);
