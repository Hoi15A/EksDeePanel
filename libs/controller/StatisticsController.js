var approot = require('app-root-path');
var StatisticsGraphModel = require(approot + '/libs/model/StatisticsGraphModel');

var StatisticsController = function() {
	/**
	 * Get usage graph
	 */
	this.getGraph = function(callback) {
		new StatisticsGraphModel().getData(function(res) {
			var ret = [{x: [''], y: [0], type: 'scatter'}];

			for(var i = 0; i < res.length; i++) {
				ret[0].x.push(res[i].timestamp);
				ret[0].y.push(res[i].count);
			}
			callback(ret);
		});
	}
}

module.exports = StatisticsController;
