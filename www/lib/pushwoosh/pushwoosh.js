var GOOGLE_PROJECT_ID = "appser-1279";
var PUSHWOOSH_APP_ID = "603B4-CD8F9";


function initPushwoosh()
{    
    alert("initPushwoosh1");
    if (typeof device != 'undefined')
    {
        alert("initPushwoosh2");
        if(device.platform.toUpperCase() == "IPHONE" || device.platform.toUpperCase() == "IOS")       
        {
            //registerPushwooshIOS(); 
        }
        else
        {               
            //registerPushwooshAndroid();
        }
    }
    else
    {
        alert("NO init initPushwoosh");
    }
}
