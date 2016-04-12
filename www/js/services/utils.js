'use strict';

angular.module('ser').service('Utils', ['Configuration', '$cordovaAppAvailability', function(Configuration, $cordovaAppAvailability) 
{

	var self = this;

	self.dateToDDMMYYYY = function(date)
	{
		var yyyy = date.getFullYear().toString();
      	var mm = (date.getMonth()+1).toString(); // getMonth() is zero-based
      	var dd  = date.getDate().toString();
      	
      	return (dd[1]?dd:"0"+dd[0]) + "-" +(mm[1]?mm:"0"+mm[0]) + "-" + yyyy; // padding
	}


	self.appTwitterAvailability = function()
	{
		var scheme;
		// Don't forget to add the cordova-plugin-device plugin for `device.platform`
		if(ionic.Platform.isIOS() == true) 
		{
		    scheme = 'twitter://';
		}
		else if(ionic.Platform.isAndroid() == true)
		{
		    scheme = 'com.twitter.android';
		}

	
		//if(typeof $cordovaAppAvailability != 'undefined')
		if(typeof appAvailability != 'undefined')
		{
			alert("entrando...");
			//$cordovaAppAvailability.check(
			appAvailability.check(
			    scheme,       // URI Scheme or Package Name
			    function() {  // Success callback
			        alert(scheme + ' is available :)');
			        return true;
			    },
			    function() {  // Error callback
			        alert(scheme + ' is not available :(');
			        return false;
			    }
			);
		}
		else
		{
			alert("no available");
			return false;
		}

	}
 
}]);



