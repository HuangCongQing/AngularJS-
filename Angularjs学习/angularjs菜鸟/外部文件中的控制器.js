	var app=angular.module('myApp',[]);
	app.controller('myCtrl',function($scope){
		$scope.firstName="重庆";
		$scope.lastName="黄";
		$scope.fullName = function() {
        return $scope.firstName + " " + $scope.lastName;
      }
	});