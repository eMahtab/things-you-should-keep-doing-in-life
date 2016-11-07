module.exports=function(ngModule){

  ngModule.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
          .state('detail', {
            url: '/detail/:itemId',
            templateUrl: 'app/detail/detail-tmpl.html',
            controller:'DetailController'
          });
  });

}
