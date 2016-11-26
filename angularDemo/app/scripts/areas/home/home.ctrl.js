var homeServ = require('./home.serv.js').fn;
var homeRoute = require('./home.route.js').fn;

var home = exports;

home.moduleName = 'areas.home';

home.module = angular.module(home.moduleName, [])
    .config(homeRoute)
    .service('HomePageServ', homeServ)
    .controller('HomePageController', [
        '$scope','HomePageServ',
        function ($scope,HomePageServ) {
            $scope.msg = HomePageServ.data.msg;
            HomePageServ.logAfter1s('hello console.')
        }])