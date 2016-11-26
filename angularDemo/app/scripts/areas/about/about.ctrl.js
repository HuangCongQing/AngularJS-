var serv = require('./about.serv.js').fn;
var route = require('./about.route.js').fn;

var home = exports;

home.moduleName = 'areas.about';

home.module = angular.module(home.moduleName, [])
    .config(route)
    .service('AboutPageServ', serv)
    .controller('AboutPageController', [
        '$scope','AboutPageServ',
        function ($scope,AboutPageServ) {
            $scope.msg = AboutPageServ.data.msg;
        }])