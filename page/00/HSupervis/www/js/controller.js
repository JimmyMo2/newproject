
angular.module('mobilexapps.controller', [])

  .controller("HelloworldCtrl",function ($scope, $state,$ionicLoading,$ionicPopup,HelloWorldService,HelloWorldService1) {

    //写死id,传参
    var id = 1;
    //点击事件
    $scope.gogo = function () {

      //请求数据get
      HelloWorldService.helloworld(id).success(function (data) {
        // showAlert($ionicPopup,"HELLOWORLD")
        console.log(data)
        $scope.item=data.list[0];
      }).error(function (data) {
        loading.hide($ionicLoading);
        showAlert($ionicPopup,"服务器请求失败");
      });
      //请求数据post
      HelloWorldService1.helloworld1(id).success(function (data) {
        // showAlert($ionicPopup,"HELLOWORLD")
        console.log(data)
        $scope.item=data.list[0];
      }).error(function (data) {
        loading.hide($ionicLoading);
        showAlert($ionicPopup,"服务器请求失败");
      });
    }
  })

  .controller("RenewCtrl",function ($scope, $state,$ionicLoading,$ionicPopup) {

  })


