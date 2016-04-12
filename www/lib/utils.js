

function appTwitterAvailability()
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

    if(typeof appAvailability != 'undefined')
    {
        alert("entrando...");
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
