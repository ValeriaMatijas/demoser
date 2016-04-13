angular.module('ser').controller('EventsCatCtrl', [ '$stateParams', function($stateParams) {
  var self = this;

  self.init = function()
  {
  	switch( $stateParams.idEventCat)
  	{
  		case "cursos":
  			self.events = [
			    { title: 'Curso 1', id: 1 },
			    { title: 'Curso 2', id: 2 },
			    { title: 'Curso 3', id: 3 }
			  ];
  		break;

  		case "congresos":
  			self.events = [
			    { title: 'Congreso 1', id: 1 },
			    { title: 'Congreso 2', id: 2 },
			    { title: 'Congreso 3', id: 3 }
			  ];
  		break;

  		case "simposios":
  			self.events = [
			    { title: 'Simposio 1', id: 1 },
			    { title: 'Simposio 2', id: 2 },
			    { title: 'Simposio 3', id: 3 }
			  ];
  		break;

  	}
  
  }
  
  self.init();



}]);