'use strict';

angular.module('ser').service('ModelData', ['$localStorage', '$sessionStorage', function($localStorage, $sessionStorage) 
{

    this.setData = function(id, val)
    {
        $sessionStorage[id] = val;
    }

    this.getData = function (id) 
    {
        return  $sessionStorage[id];
    }


    this.clearInfo = function()
    {
      delete $localStorage.userStorage;
      $sessionStorage.$reset();

      this.setData('TOKEN', '');        
    }


}]);
