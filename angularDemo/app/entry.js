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