var userInfoModule = angular.module('UserInfoModule', []);
userInfoModule.controller('UserInfoCtrl', ['$scope',
    function($scope) {
        $scope.userInfo = {
            email: "1756260160@qq.com",
            password: "1234567890",
            autoLogin: true
        };
        $scope.getFormData = function() {
            console.log($scope.userInfo);
        };
        $scope.setFormData = function() {
            $scope.userInfo = {
                email: 'm18875141356@163.com',
                password: '1234567890',
                autoLogin: false
            }
        };
        $scope.resetForm = function() {
            $scope.userInfo = {
                email: "huangchongqing521@gmail.com",
                password: "1234567890",
                autoLogin: true
            };
        }
    }
])


//练习专用
// var userInfoModule =angular.module('UserInfoMoudle',[]);
// userInfoModule.controller('UserInfoCtrl',['$scope',
//     function
//     ])