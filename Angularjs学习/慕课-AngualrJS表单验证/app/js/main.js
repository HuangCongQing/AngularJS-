angular.module("myApp",[])
	.controller('signUpController',function ($scope) {
		
		$scope.userdata={};    //存储数据
		$scope.submitForm=function(){    //验证数据
			console.log($scope.userdata);
			if($scope.signUpForm.$invalid)
				alert("Please check you information!");
			else
				alert("You are right!")
		}
	 })
	.directive('compare',function(){              //比较两次密码是否相等
		var o={};
		o.strict ='AE';
		o.scope = {
			orgText:'=compare'
		}
		o.require="ngModel";
		o.link =function(sco, ele, attr, controller){

			controller.$validators.compare=function()
			{
				return value == sco.orgText
			}
			sco.$watch('orgText', function(){
				controller.$validator();
			});
		}
		return o;
	})