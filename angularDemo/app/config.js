exports.configFn = [
    '$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider
            .when('', '/home')
            .otherwise('/home')
    }];