'use strict';

angular.module('ser').service('Configuration', [function() 
{
    this.URL_BASE = 'http://mirador.nodedev.shck.es/';
   
    //URL API
    this.URL_API = this.URL_BASE + 'api/';

}]);