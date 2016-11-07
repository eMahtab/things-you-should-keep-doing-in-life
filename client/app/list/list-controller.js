module.exports=function(ngModule){

     ngModule.controller('ListController',function($scope,$http){

       $http.get('app/data/data.json').success(function(data) {
              $scope.tenThings = data;
       });

     });

};
