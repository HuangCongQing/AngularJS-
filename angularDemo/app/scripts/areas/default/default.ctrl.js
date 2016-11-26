var route = require('./default.route.js').fn;

var _default = exports;

_default.moduleName = 'areas.default';

_default.module = angular.module(_default.moduleName, [])
    .config(route)
    .controller('DefaultPageController', [
        '$scope',
        function ($scope) {
            $scope.msg = 'hello this is default page.'
        }]);