(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.configFn = [
    '$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider
            .when('', '/home')
            .otherwise('/home')
    }];
},{}],2:[function(require,module,exports){
var configFn = require('./config.js').configFn;

var home = require('./scripts/areas/home/home.ctrl.js');
var about = require('./scripts/areas/about/about.ctrl.js');
var tabs = require('./scripts/areas/tabs/tabs.ctrl.js');
var _default = require('./scripts/areas/default/default.ctrl.js');

angular.module('app', [
    'ui.bootstrap',
    'ui.router',
    home.moduleName,
    about.moduleName,
    tabs.moduleName,
    _default.moduleName

])

    .config(configFn);
},{"./config.js":1,"./scripts/areas/about/about.ctrl.js":3,"./scripts/areas/default/default.ctrl.js":6,"./scripts/areas/home/home.ctrl.js":8,"./scripts/areas/tabs/tabs.ctrl.js":13}],3:[function(require,module,exports){
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
},{"./about.route.js":4,"./about.serv.js":5}],4:[function(require,module,exports){
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
},{}],5:[function(require,module,exports){
exports.fn = [
    '$timeout',
    function ($timeout) {
        this.data = {
            msg:'hello my friend. this is aboutpage.'
        }
    }
]
},{}],6:[function(require,module,exports){
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
},{"./default.route.js":7}],7:[function(require,module,exports){
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
},{}],8:[function(require,module,exports){
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
},{"./home.route.js":9,"./home.serv.js":10}],9:[function(require,module,exports){
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
},{}],10:[function(require,module,exports){
exports.fn = [
    '$timeout',
    function ($timeout) {
        this.logAfter1s = function (msg) {
            $timeout(function () {
                console.log(msg)
            }, 1000);
        }
        this.data = {
            msg:'hello my friend. this is homepage.'
        }
    }
]
},{}],11:[function(require,module,exports){
var tab1 = module.exports = {};

tab1.moduleName = 'areas.tabs.tab1';
tab1.module = angular.module(tab1.moduleName,[])
    .controller('TabsTab1PageController',[
        '$scope',
        function ($scope) {
            $scope.msg = 'this is from tab1'
        }
    ]);
},{}],12:[function(require,module,exports){
var tab2 = module.exports = {};

tab2.moduleName = 'areas.tabs.tab2';
tab2.module = angular.module(tab2.moduleName,[])
    .controller('TabsTab2PageController',[
        '$scope',
        function ($scope) {
            $scope.msg = 'this is from tab2'
        }
    ]);
},{}],13:[function(require,module,exports){
var tabs = module.exports = {};
var routeFn = require('./tabs.route').fn;
var tab1 = require('./tab1/tab1.ctrl');
var tab2 = require('./tab2/tab2.ctrl');
tabs.moduleName = 'areas.tabs';

tabs.module = angular.module('areas.tabs',
    [tab1.moduleName,tab2.moduleName])
    .config(routeFn);

},{"./tab1/tab1.ctrl":11,"./tab2/tab2.ctrl":12,"./tabs.route":14}],14:[function(require,module,exports){
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

},{}]},{},[2])


//# sourceMappingURL=bundle.js.map
