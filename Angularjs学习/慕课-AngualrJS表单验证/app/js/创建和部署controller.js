angular.module("myApp",[])
	.controller('signUpController',function ($scope) {
		
		$scope.userdata={};    //存储数据
		$scope.submitForm=function(){    //验证数据
			console.log($scope.userdata);
			if($scope.signUpForm.$invalid)
		}
	 })