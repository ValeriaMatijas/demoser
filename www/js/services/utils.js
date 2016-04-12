'use strict';

angular.module('ser').service('Utils', ['Configuration', function(Configuration) 
{

	this.dateToDDMMYYYY = function(date)
	{
		var yyyy = date.getFullYear().toString();
      	var mm = (date.getMonth()+1).toString(); // getMonth() is zero-based
      	var dd  = date.getDate().toString();
      	
      	return (dd[1]?dd:"0"+dd[0]) + "-" +(mm[1]?mm:"0"+mm[0]) + "-" + yyyy; // padding
	}
 


}]);



