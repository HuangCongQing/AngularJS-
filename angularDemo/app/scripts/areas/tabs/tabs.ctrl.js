var tabs = module.exports = {};
var routeFn = require('./tabs.route').fn;
var tab1 = require('./tab1/tab1.ctrl');
var tab2 = require('./tab2/tab2.ctrl');
tabs.moduleName = 'areas.tabs';

tabs.module = angular.module('areas.tabs',
    [tab1.moduleName,tab2.moduleName])
    .config(routeFn);
