
'use strict';

var settingModel={
  isDebug:true
};
var loading={
  show:function (ionicLoading) {
      ionicLoading.show({
          template:'<ion-spinner icon="ripple" class="spinner-positive"></ion-spinner><p class="positive">数据加载中</p>',
          animation: 'fade-in',
          showBackdrop: false,
          maxWidth: 200,
          showDelay: 0
      });
  },
    hide:function (ionicLoading) {
        ionicLoading.hide();
    }
}
var showAlert = function(ionicPopup,message) {
    var alertPopup = ionicPopup.alert({
        title: '系统提示',
        template:message
    });
};
var changinfo=function(str){
  //第一步先转换成字符串
  var infoSt = angular.toJson(str);
  // 第二步进行转义
  var infoStr=infoSt.replace(/\[/g,'%5B').replace(/\]/g,'%5D');
  return infoStr;
}

