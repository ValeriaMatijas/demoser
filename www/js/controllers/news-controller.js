angular.module('ser').controller('NewsCtrl', [ '$stateParams', function($stateParams) {
  var self = this;
  self.news = [
    { title: 'El Prof. Eliseo Pascual, galardonado con el premio EULAR Meritorious Service Award 2016', id: 1 },
    { title: 'Nota informativa de la AEMPS: Cambios en metotrexato para evitar errores en la medicación', id: 2 },
    { title: 'Citas formativas de este mes de abril', id: 3 },
    { title: 'Un 30-50% de pacientes con enfermedad inflamatoria intestinal también sufren afectación articular', id: 4 },
    { title: 'Elecciones 2016: programa electoral de los dos candidatos', id: 5 },
    { title: 'Elecciones: Solicitud de voto por correo', id: 6 }
  ];
}]);