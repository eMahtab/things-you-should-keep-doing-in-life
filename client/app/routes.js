module.exports=function(ngModule){

  ngModule.config(function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/list');

      $stateProvider
          .state('list', {
              url: '/list',
              templateUrl: 'app/list/list-tmpl.html',
              controller:'ListController'
          })
          .state('detail', {
            url: '/detail/:itemId',
            templateUrl: 'app/detail/detail-tmpl.html',
            controller:'DetailController'
          });
  });

}
