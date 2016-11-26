exports.fn = [
    '$stateProvider',
    function ($stateProvider) {
        $stateProvider // 状态注册器
            .state('home',{
                url:'/home',
                templateUrl:'./res/templates/home.partial.html',
                controller:'HomePageController'
            })
    }
]