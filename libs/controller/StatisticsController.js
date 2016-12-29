var approot = require('app-root-path');
var StatisticsGraphModel = require(approot + '/libs/model/StatisticsGraphModel');

var StatisticsController = function() {
	/**
	 * Get usage graph
	 */
	this.getGraph = function() {
		var data = new StatisticsGraphModel().getData();
		return data;
	}
}

module.exports = StatisticsController;
