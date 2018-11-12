var id=1;//id是传的参数，这里写死
angular.module('mobilexapps.service', [])

  //GET
  .service('HelloWorldService',function ($q,$http) {
    return {
      helloworld:function () {
        console.log("--start ApplicationInfoService--");
        var deferred = $q.defer();
        var promise=deferred.promise;
        var param = '';
        var url = '';
        if (settingModel.isDebug) {
          url = serviceUrl.debug.helloworldUrl;
        } else {
          url = serviceUrl.nomal.getGetUrl();
          param = serviceUrl.param.getHelloWorldParam(id);
        }
        $http.get(url,param).success(function (data) {
          deferred.resolve(data);console.log(data);
          console.log("--get ApplicationInfoService  GetBusinessInfo SUCC" + url);
        })
          .error(function(data) {
            deferred.reject(data);
            console.log("---ApplicationInfoService get data ERROR");
          });
        promise.success = function(fn) {
          promise.then(fn);
          return promise;
        };
        promise.error = function(fn) {
          promise.then(null, fn);
          return promise;
        };
        return  promise;
      }
    }
  })
	//POST
  .service('HelloWorldService1',function ($q,$http) {
    return {
      helloworld1:function () {
        console.log("--start ApplicationInfoService--");
        var deferred = $q.defer();
        var promise=deferred.promise;
        var param = '';
        var url = '';
        if (settingModel.isDebug) {
          url = serviceUrl.debug.helloworldUrl;
        } else {
          url = serviceUrl.nomal.getPostUrl();
          param = serviceUrl.param.postHelloWorldParam(id);
        }
        //将参数传递的方式改为form
        var postCfg={
        	headers:{'Content-Type':'application/x-www-form-urlencoded'},
        	transformRequest:function(param){
        		return $.param(param);
        	}
        }
        $http.post(url,param,postCfg).success(function (data) {
          deferred.resolve(data);console.log(data);
          console.log("--get ApplicationInfoService  GetBusinessInfo SUCC" + url);
        })
          .error(function(data) {
            deferred.reject(data);
            console.log("---ApplicationInfoService get data ERROR");
          });
        promise.success = function(fn) {
          promise.then(fn);
          return promise;
        };
        promise.error = function(fn) {
          promise.then(null, fn);
          return promise;
        };
        return  promise;
      }
    }
  })

