'use strict';

angular.module('ser').service('ModelData', ['$sessionStorage', function($sessionStorage) 
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
      //delete $localStorage.userStorage;
      $sessionStorage.$reset();
      
    }


}]);
