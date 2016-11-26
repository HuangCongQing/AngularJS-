module.exports.fn = [
    '$stateProvider',
    function ($stateProvider) {
        $stateProvider
            .state('tabs', {
                url: '/tabs',
                templateUrl: './res/templates/tabs.partial.html'
            })
            .state('tabs.tab1', {
                url: '/tab1',
                controller: 'TabsTab1PageController',
                templateUrl: './res/templates/tabs.tab1.partial.html'
            })
            .state('tabs.tab2', {
                url: '/tab2',
                controller: 'TabsTab2PageController',
                templateUrl: './res/templates/tabs.tab2.partial.html'
            })
    }
];
