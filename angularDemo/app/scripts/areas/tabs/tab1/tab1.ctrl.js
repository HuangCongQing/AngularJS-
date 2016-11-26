var tab1 = module.exports = {};

tab1.moduleName = 'areas.tabs.tab1';
tab1.module = angular.module(tab1.moduleName,[])
    .controller('TabsTab1PageController',[
        '$scope',
        function ($scope) {
            $scope.msg = 'this is from tab1'
        }
    ]);