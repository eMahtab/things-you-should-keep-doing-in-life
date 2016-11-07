module.exports=function(ngModule){

  ngModule.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
          .state('detail', {
            url: '/detail/:itemId',
            templateUrl: 'app/templates/detail-tmpl.html',
            controller:'DetailController'
          });
  });

}
