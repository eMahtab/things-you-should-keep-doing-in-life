module.exports=function(ngModule){

  ngModule.config(function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/list');

      $stateProvider
          .state('list', {
              url: '/list',
              templateUrl: 'app/templates/list-tmpl.html',
              controller:'ListController'
          });
  });

}
