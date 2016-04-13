angular.module('ser').controller('EventsCtrl', [ '$stateParams', function($stateParams) {
  var self = this;
  self.events = [
    { title: 'Curso básico para residentes.- Escuela de Ecografía 2016', id: 1 },
    { title: 'Talleres GEAPSOSER', id: 2 },
    { title: 'IX Simposio de Artritis Reumatoide', id: 3 },
    { title: 'ReumAPtopics Málaga', id: 4 },
    { title: 'Curso de Postgraduados', id: 5 },
  ];
}]);