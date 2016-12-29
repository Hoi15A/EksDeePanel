var approot = require('app-root-path');
var db = require(approot + '/libs/db');


var StatisticsGraphModel = function() {
	this.getData = function() {
		return ['hello', 'array', 'test'];
	}
}

module.exports = StatisticsGraphModel;
