module.exports=function(ngModule){

  ngModule.controller('DetailController', function($scope, $http, $stateParams) {

   $http.get('app/data/data.json').success(function(data) {
          $scope.tenThings = data;
          $scope.whichItem = $stateParams.itemId;

         if ($stateParams.itemId > 0) {
            $scope.prevItem = Number($stateParams.itemId)-1;
          } else {
            $scope.prevItem = $scope.tenThings.length-1;
          }

        if ($stateParams.itemId < $scope.tenThings.length-1) {
            $scope.nextItem = Number($stateParams.itemId)+1;
         } else {
          $scope.nextItem = 0;
          }
     });
});

};
