var approot = require('app-root-path');
var StatisticsGraphModel = require(approot + '/libs/model/StatisticsGraphModel');

var StatisticsController = function() {
	/**
	 * Get usage graph
	 */
	this.getGraph = function() {
		return new StatisticsGraphModel().getData();
	}
}

module.exports = StatisticsController;
