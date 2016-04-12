var GOOGLE_PROJECT_ID = "appser-1279";
var PUSHWOOSH_APP_ID = "603B4-CD8F9";


function initPushwoosh()
{    
  
    alert("initPushwoosh");
    if(ionic.Platform.isIOS() == true)       
    {
        //registerPushwooshIOS(); 
    }
    else if(ionic.Platform.isAndroid() == true)
    {               
        //registerPushwooshAndroid();
    }
    else
    {
        alert("NO init initPushwoosh");
    }
    
    
}


/*********************************************
************** ANDROID ***********************
**********************************************/
function registerPushwooshAndroid(){    
    var pushNotification = cordova.require("com.pushwoosh.plugins.pushwoosh.PushNotification");
 
    //set push notifications handler
    document.addEventListener('push-notification', function(event) {
        var title = event.notification.title;
        var userData = event.notification.userdata;
            
                                 
        if(typeof(userData) != "undefined") 
        {
            alert('user data: ' + JSON.stringify(userData));

            //almacenamos el valor de la notificacion
            /*if(userData.idpromo != null)
            {
                md.setData(com.spyko.app.model.ModelData.ID_PROMO, userData.idpromo);
            }*/
        }

                                     
        //alert("Title: " + title);
    });
    


    //initialize Pushwoosh with projectid: "GOOGLE_PROJECT_ID", pw_appid : "PUSHWOOSH_APP_ID". This will trigger all pending push notifications on start.
    pushNotification.onDeviceReady({ projectid: GOOGLE_PROJECT_ID, pw_appid : PUSHWOOSH_APP_ID });
 
    //register for pushes
    pushNotification.registerDevice(
        function(status) {
            var pushToken = status;
            alert('registerDevice: ' + pushToken);
            onPushwooshInitialized();
        },
        function(status) {
            //console.log(JSON.stringify(['failed to register ', status]));           
        }
    );
}

/*********************************************
**********************************************
**********************************************/


/*********************************************
************** IOS ***************************
**********************************************/
function registerPushwooshIOS() {  
    var pushNotification = cordova.require("com.pushwoosh.plugins.pushwoosh.PushNotification");
 
    //set push notification callback before we initialize the plugin
    document.addEventListener('push-notification', function(event) {
                                //get the notification payload
                                var notification = event.notification;
                                                                                          
                                //almacenamos el valor de la notificacion
                                /*if(notification.userdata.idpromo != null)
                                {
                                    md.setData(com.spyko.app.model.ModelData.ID_PROMO, notification.userdata.idpromo);                                    
                                }*/
                               
                                //clear the app badge
                                pushNotification.setApplicationIconBadgeNumber(0);
                            });
 
    //initialize the plugin      
    pushNotification.onDeviceReady({pw_appid: PUSHWOOSH_APP_ID});
     

     //alert("registerDevice!!");
    //register for pushes
    pushNotification.registerDevice(
        function(status) {
            var deviceToken = status['deviceToken'];
            alert('registerDevice: ' + deviceToken);
            onPushwooshInitialized();
        },
        function(status) {
           //console.warn('failed to register : ' + JSON.stringify(status));
           //alert(JSON.stringify(['Pushwoosh register failed ', status]));
		   	
        }
    );
	

     
    //reset badges on app start
    pushNotification.setApplicationIconBadgeNumber(0);
}




/*********************************************
**********************************************
**********************************************/


function onPushwooshInitialized()
{
    //setTagUserID(55555555);        
    //token para identificar a debug dispositivos
    //getPushToken();

    getHWID(); 
}


function getHWID()
{   
    var pushNotification = cordova.require("com.pushwoosh.plugins.pushwoosh.PushNotification");
    //var ref = this;

    pushNotification.getPushwooshHWID(
        function(token) {
            
            alert("getPushwooshHWID: " + token);
            //almacenar token
            //var md = com.spyko.app.model.ModelData.getInstance();            
           // md.setData(com.spyko.app.model.ModelData.HWID, token);  
        
            //ref.getTags();       
        }
    );
}


function getPushToken()
{
    var pushNotification = cordova.require("com.pushwoosh.plugins.pushwoosh.PushNotification");
    
    pushNotification.getPushToken(
    function(token)
    {
        //alert('push token: ' + token);
    }
);
}


function setTag(name, value)
{
    var pushNotification = cordova.require("com.pushwoosh.plugins.pushwoosh.PushNotification");

    //settings tags
    pushNotification.setTags({name:value},
        function(status) {
          //alert('setTags success: ' + status);

           //getTags();
        },
        function(status) {
            //alert('setTags failed');
        }
    );
}


function getTags()
{
    var pushNotification = cordova.require("com.pushwoosh.plugins.pushwoosh.PushNotification");

    //gettings tags
    pushNotification.getTags(
        function(tags)
        {
            //alert('tags for the device: ' + JSON.stringify(tags));
        },
        function(error)
        {
            //alert('get tags error: ' + JSON.stringify(error));
        }
    );

}
 