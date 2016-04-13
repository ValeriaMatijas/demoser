angular.module('ser').controller('EventsCtrl', [ '$stateParams', function($stateParams) {
  var self = this;

  self.init = function()
  {
  	self.categories = [
	    { title: 'Congresos', id: 'congresos' },
	    { title: 'Simposios', id: 'simposios' },
	    { title: 'Cursos', id: 'cursos' }
	  ];
  }

  self.init();
  
}]);