var angular=require('angular');
var angularUIRouter=require('angular-ui-router');

var ngModule=angular.module('thingsTodo',['ui.router']);

require('./list')(ngModule);
require('./detail')(ngModule);
