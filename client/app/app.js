var angular=require('angular');
var angularUIRouter=require('angular-ui-router');

var ngModule=angular.module('thingsTodo',['ui.router']);


require('./routes')(ngModule);
require('./list')(ngModule);
require('./detail')(ngModule);
