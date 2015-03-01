// Code goes here

angular.module('myApp',['ui.bootstrap'])
.controller('myController',['$scope','$window','$modal','$log',
function($scope,$window,$modal,$log){
  $scope.myForm = {};
  $scope.abc = '';
  // FOLLOWING WITH OPEN NATIVE BROWSER'S ALERT
  $window.onbeforeunload = function(event) {
      if ($scope.myForm.form.$dirty) {
          event = $window.event;
          if (event) {
              event.returnValue = 'There are some unsaved changes. Sure you want to leave?';
          }
          return 'There are some unsaved changes. Sure you want to leave?';
      }
  };

  /*$scope.$on('$locationChangeStart', function(event) {
      // if modal instance difined, dismiss window
      if ($scope.modalInstance) {
          $scope.modalInstance.close('cancel');
      }

      if($scope.myForm.form.$dirty){
          event.preventDefault();

          $scope.modalInstance = $modal.open({ templateUrl: 'modalg.html', backdrop: 'static' });
          $scope.modalInstance.result.then(function() {
              if($scope.toAdminScreen === true)
                  $location.path('/ui/admin');
              else if($scope.toHomeScreen === true){
                  $avaValuationService.avaPartOutModel.engineSerialNumber = '';
                  $location.path('/ui/ava-home');
              }
              else
                  $window.history.back();
              // SET ALL FORMS TO PRISTINE STATE
              $scope.renameValuationForm.renameValuationForm.$setPristine(true);
              $scope.engineInfoForm.engineInfoForm.$setPristine(true);
              $scope.valuationNameForm.valuationNameForm.$setPristine(true);
              $scope.valuationForm.valuationForm.$setPristine(true);

              return true;
          });
      }
  });*/

}]);