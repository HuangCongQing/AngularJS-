exports.fn = [
    '$stateProvider',
    function ($stateProvider) {
        $stateProvider
            .state('default',{
                url:'/default',
                templateUrl:'./res/templates/default.partial.html',
                controller:'DefaultPageController'
            })
    }
];