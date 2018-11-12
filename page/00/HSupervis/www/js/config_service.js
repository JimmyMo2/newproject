
'use strict';
var serviceUrl = {//挡板数据
  debug:{
    helloworldUrl : 'data/helloworld.data',
  },
  nomal:{//第三方
    getGetUrl: function () {
      var getUrl = '/meeting/OtherGet.do';
      return getUrl;
    },
	  getPostUrl: function () {
      var postUrl = '/meeting/OtherPost.do';
      return postUrl;
    }
  },
  param:{//请求数据时传的参数
    getHelloWorldParam:function (id) {
      var param = { params: {params:"{'key':'GET_INFO','content':{'id':'"+id+"'}}",
                  applyId:"",serviceName:serviceUrl.getServiceName()}};
      return param;
    },
    postHelloWorldParam:function (id) {
      var param = {params:"{'key':'GET_INFO','content':{'id':'"+id+"'}}",
                  applyId:"",serviceName:serviceUrl.getServiceName()};
      return param;
    }
  },
  getServiceName:function () {
    return sessionStorage.serviceName;
  }
};


