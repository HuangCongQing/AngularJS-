exports.fn = [
    '$stateProvider',
    function ($stateProvider) {
        $stateProvider
            .state('about',{
                url:'/about',
                templateUrl:'./res/templates/about.partial.html',
                controller:'AboutPageController'
            })
    }
]