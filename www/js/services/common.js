'use strict';

angular.module('ser').service('Common', ['Configuration' ,'ModelData', '$state', '$location', function(Configuration, ModelData, $state, $location) 
{
 	this.goTo = function(url, params)
  {
      //window.location.href = '/' + url;
      $state.go(url, params);
      //$location.path('/playlists').search({i: 3});
      //$location.path('/sfsdf');
  }

	this.getCurrentPath = function()
	{
   		return $location.path();
	}


	this.logOut = function()
  {                     
     ModelData.clearInfo();  
     this.goTo('login');      
  }

  this.isMobile = function()
  { 
      if(navigator.userAgent.match(/Android/i))
      {
        return true;
      }
      else if(navigator.userAgent.match(/iPhone | iPad | iPod/i))
      {
        return true;
      }
      else
      {
        return false;
      }

  }


}]);



