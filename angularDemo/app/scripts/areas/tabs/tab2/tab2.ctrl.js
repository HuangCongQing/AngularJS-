var tab2 = module.exports = {};

tab2.moduleName = 'areas.tabs.tab2';
tab2.module = angular.module(tab2.moduleName,[])
    .controller('TabsTab2PageController',[
        '$scope',
        function ($scope) {
            $scope.msg = 'this is from tab2'
        }
    ]);