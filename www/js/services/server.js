'use strict';

angular.module('ser').service('Server', ['$http', '$httpParamSerializerJQLike', '$q', '$rootScope', 'ModelData', 'Utils', 'Configuration', function($http, $httpParamSerializerJQLike, $q, $rootScope, ModelData, Utils, Configuration) 
{    
    var METHOD_API = 'POST';

    var self = this;
    var _data;
    var _headers;
    var _url;


    self.initBasicPeticion = function() 
    {                       
        _data = {};   
        _headers = {};     
        
        _headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
        if(ModelData.getData("TOKEN") != null && ModelData.getData("TOKEN") != undefined)
        {
            var token = "Bearer " + ModelData.getData("TOKEN")
            $http.defaults.headers.common.Authorization = token;
            _headers['Authorization'] = token;
        } 
        
    }

    self.executeQuery = function(showPreloader)
    {
        var deferred = $q.defer();
        //var d1 = new Date();
        //var t1 = d1.getTime();

        if(showPreloader != false)
        {
            $rootScope.$emit('showPreloader', true);
        }

        $http({
            method: METHOD_API,      
            url: _url,            
            headers: _headers,           
            //data: $.param(_data)
            data: $httpParamSerializerJQLike(_data)
            
        }).success(function(data)
        {  
            if(showPreloader != false)
            {
                $rootScope.$emit('showPreloader', false);
            }
            
            deferred.resolve(data);
        }).error(function(error)
        {   
            if(showPreloader != false)
            {
                $rootScope.$emit('showPreloader', false);
            }
            deferred.reject(error);          
        });

        return deferred.promise;
    }




    self.login = function(email, pass) 
    {
        self.initBasicPeticion();
        _url = Configuration.URL_API + 'usuario/login';       

        _data.email = email;
        _data.pass = pass//CryptoJS.SHA1(pass).toString();
         

        return self.executeQuery(true);        
    } 



    self.getTwitterFriends = function(cursor)
    {
        self.initBasicPeticion();
        _url = Configuration.URL_API + 'twitter/getFriends';      
        _data.cursor = cursor;
       
        return self.executeQuery(true); 
    }

}]);

